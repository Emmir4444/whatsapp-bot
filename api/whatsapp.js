const app = require('../src/index'); // Importas tu app de src
const serverless = require('serverless-http');

module.exports = serverless(app);
