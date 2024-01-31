const express = require('express');
const productRouter = require('./routes/productroute')


const app = express();
app.use(express.json());
app.use('/', productRouter);
module.exports = app;

