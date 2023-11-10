const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const expresssw = require('express');
const routersw = expresssw.Router();

routersw.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routersw.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routersw;
