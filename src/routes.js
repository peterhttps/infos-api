const express = require('express');
const routes = express.Router();
const InfoController = require('./controllers/InfoController');


routes.get('/', InfoController.index);
routes.get('/last', InfoController.last_index);
routes.get('/first', InfoController.first_index);
routes.post('/send', InfoController.send);
routes.delete('/delete/:id', InfoController.destroy);

module.exports = routes;
