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
  app.get('/api/v1/user', getUserOpts, function(request) {
    return db.models.User.findOne({
      where: { username: request.query.username },
      include: [ db.models.Product ],
      attributes: {
        exclude: ['firstName', 'lastName', 'updatedAt', 'createdAt'],
      },
    })
  });

  app.get('/api/v1/product', getProductOpts, function(request) {
    return db.models.Product.findOne({
      where: { id: request.query.id },
      attributes: {
        exclude: ['source', 'description', 'scrapedAt', 'updatedAt', 'createdAt', 'UserId']
      }
    });
  });
};

module.exports = {
  addToApp,
};