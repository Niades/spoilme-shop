const fastify = require("fastify");
const db = require("./db");

const app = fastify({
  logger: true,
});

app.register(require("fastify-cors"), {
  origin: "*"
});

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

app.get('/api/v1/user', getUserOpts, function(request) {
  return db.models.User.findOne({
    where: { username: request.query.username },
    attributes: {
      exclude: ['firstName', 'lastName', 'updatedAt', 'createdAt'],
    },
  })
});

app.listen(3005);