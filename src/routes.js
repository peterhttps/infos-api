const express = require('express');
const routes = express.Router();
const InfoController = require('./controllers/InfoController');
var cors = require('cors')

routes.get('/', cors(), InfoController.index);
routes.get('/last', cors(), InfoController.last_index);
routes.get('/first', cors(), InfoController.first_index);
routes.post('/send', cors(), InfoController.send);
routes.delete('/delete/:id', cors(), InfoController.destroy);

module.exports = routes;
