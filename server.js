#! /usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express( db );

app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');
