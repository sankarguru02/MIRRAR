const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');
const express = require('express')
const app = require('./app');



const DB = "mongodb+srv://sankar:tMHeBXbOQ19iqC3h@cluster0.vyyqs31.mongodb.net/?retryWrites=true&w=majority";
  
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
    })
    .then(() => console.log('DB connection successful!'));


const port = 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

