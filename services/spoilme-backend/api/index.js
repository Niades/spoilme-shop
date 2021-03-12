const { Op } = require('sequelize');
const db = require("../db");
const { processScrapedValues } = require("../scraping/processing");
const { SOURCES } = require("../scraping/sources");

const log = require("../util/log").createLogger("api-index");

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
    return db.sequelize.models.User.findOne({
      where: { username: req.query.username },
      include: [{
        model: db.sequelize.models.Product,
        where: { 
          displayPrice: {
            [Op.not]: null,
          },
        },
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
    return db.sequelize.models.Product.findOne({
      where: { id: req.query.id },
      attributes: {
        exclude: [...PRODUCT_ALWAYS_EXCLUDE]
      }
    });
  });

  app.post('/api/v1/product/ozonSync', async function(req) {
    log("source = ", req.body.source);
    const product = await db.sequelize.models.Product.findOne({
      where: { source: req.body.source },
    });
    const freshValues = {
      source: SOURCES.OZON,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: parseFloat(req.body.price),
      instock: true
    };
    const newScrapedAt = new Date();
    const processedValues = await processScrapedValues(freshValues);
    product.name_RU = processedValues.name_RU;
    product.name_EN = processedValues.name_EN;
    product.description_RU = processedValues.description_RU;
    product.description_EN = processedValues.description_EN;
    product.scrapedPrice = processedValues.price;
    product.displayPrice = processedValues.displayPrice;
    product.image = processedValues.image;
    product.instock = processedValues.instock;
    product.scrapedAt = newScrapedAt;
    await product.save();
    return product;
  });
};

module.exports = {
  addToApp,
};