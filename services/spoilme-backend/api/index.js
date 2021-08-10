const db = require("../db");
const { processScrapedValues } = require("../scraping/processing");
const { SOURCES } = require("../scraping/sources");
const { FB_COLLECTIONS } = require("../constants");

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
        id: { type: "string" }
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

function hideFields(obj, fields) {
  const newObj = {};
  Object.keys(obj).forEach(key => {
    if(fields.indexOf(key) === -1) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

function addToApp(app) {
  app.get('/api/v1/user', getUserOpts, async function(req) {
    const userQueryRef = await db
      .collection(FB_COLLECTIONS.USERS)
      .where('username', '==', req.query.username)
      .get();
    if(!userQueryRef.empty) {
      const userRef = userQueryRef.docs[0];
      const productsQueryRef = await db
        .collection(FB_COLLECTIONS.PRODUCTS)
        .where('userId', '==', userRef.id)
        .get();
      return {
        user: hideFields(userRef.data(), ['firstName', 'lastName']),
        products: productsQueryRef.docs.map(p => {
          return {
            id: p.id,
            ...p.data(),
          }
        }),
      }
    } else {
      const err = new Error();
      err.statusCode = 404;
      err.message = 'User not found';
      throw err;
    }
  });

  app.get('/api/v1/product', getProductOpts, async function(req) {
    const productQueryRef = await db
      .collection(FB_COLLECTIONS.PRODUCTS)
      .doc(req.query.id)
      .get();
    if(!productQueryRef.empty) {
      return productQueryRef.data();
    } else {
      const err = new Error();
      err.statusCode = 404;
      err.message = 'Product not found';
      throw err;
    }
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