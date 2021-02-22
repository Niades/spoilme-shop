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
}

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
};

module.exports = {
  addToApp,
};