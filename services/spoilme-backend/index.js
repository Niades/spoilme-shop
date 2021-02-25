const path = require('path');
const fastify = require("fastify");
const Graceful = require("@ladjs/graceful");
const Bree = require("bree");
const log = require("./util/log").createLogger("index");

// Fastify
const app = fastify();
app.register(require("fastify-cors"), {
  origin: "*"
});
app.register(require("fastify-static"), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/'
});
// - API endpoints
require('./api').addToApp(app);

// Bree
const bree = new Bree({
  jobs: [
    {
      name: 'refresh-all-products',
      timeout: '10s'
    }
  ]
});

// Graceful
const graceful = new Graceful({ servers: [app], brees: [bree] });

// Start
graceful.listen();
bree.start();
app.listen(3005, '0.0.0.0');
log("Everything started.");