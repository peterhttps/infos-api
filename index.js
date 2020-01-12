const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(`${process.env.DB}`, {useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');

app.use('/api', require('./src/routes'));


app.use(morgan('dev'));

var port = process.env.PORT || 3001;
app.listen(port);