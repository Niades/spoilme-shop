const db = require("../db");

const getUserOpts = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        username: { type: "string" }
      },
      required: [ "username" ]
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        username: { type: 'string' },
        profileDescription: { type: 'string' }
      }
    }
  }
};

const PRODUCT_ALWAYS_EXCLUDE = [
  'source',
  'scrapedPrice',
  'scrapedAt',
  'updatedAt',
  'createdAt',
  'UserId'
];

const getProductOpts = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        id: { type: "number" }
      },
      required: [ "id" ]
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        price: { type: 'number' }
      }
    }
  }
};

function addToApp(app) {
  app.get('/api/v1/user', getUserOpts, function(req) {
    return db.models.User.findOne({
      where: { username: req.query.username },
      include: [{
        model: db.models.Product,
        attributes: {
          exclude: [...PRODUCT_ALWAYS_EXCLUDE]
        }
      }],
      attributes: {
        exclude: [
          'firstName', 'lastName', 'updatedAt', 'createdAt'
        ],
      },
    })
  });

  app.get('/api/v1/product', getProductOpts, function(req) {
    return db.models.Product.findOne({
      where: { id: req.query.id },
      attributes: {
        exclude: [...PRODUCT_ALWAYS_EXCLUDE]
      }
    });
  });
};

module.exports = {
  addToApp,
};