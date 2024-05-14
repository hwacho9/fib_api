// app.js
// use the express module
const express = require('express');
const { getFibonacci } = require('./src/controllers/fibonacciController');

const app = express();

app.get('/fib', getFibonacci);

module.exports = app;
