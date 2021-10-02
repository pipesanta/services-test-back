'use strict'

require('dotenv').load();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const { GameRoutes, CalculatorRoutes } = require('./routes');
const routesInDomain = [GameRoutes, CalculatorRoutes];


app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow --- application/json, text/plain, */*
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routesInDomain.forEach(route => route.applyRoutes(app));

app.get('', (req, res) => {
    res.send({ msg: "HOME ROUTE ENABLED" });
});


module.exports = {
    expressApp: app
}
