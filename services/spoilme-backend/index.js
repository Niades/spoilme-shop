const fastify = require("fastify");
const db = require("./db");

const app = fastify({
  logger: true,
});

const getUserOpts = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        username: { type: "string" }
      }
    }
  }
}

app.get('/api/v1/user', getUserOpts, function(request) {
  return db.models.User.findOne({
    where: { username: request.query.username },
    attributes: {
      exclude: ['firstName', 'lastName'],
    },
  })
});

app.listen(3005);