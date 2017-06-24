var express = require('express');
var bodyParser = require('body-parser');
var owners = require('../controllers/ownersController.js');
var companies = require('../controllers/companiesController.js');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = {
    routesConfig: function () {
        app.use('/', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
            res.header("Content-Type", "application/json");
            next();
        });

        //Owners
        app.post('/api/owners/create', owners.createOwner);

        //Companies
        app.post('/api/companies/create', companies.createCompany);
        app.get('/api/companies/findall', companies.findAll);
        app.get('/api/companies/findCompany/:Id', companies.findCompany);
        app.post('/api/companies/update', companies.updateCompany);

        return app;
    }
}