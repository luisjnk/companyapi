"use strict";
var config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
//var logger = require('../util/log.js').logger;
var fs        = require("fs");
var path      = require("path");
var models    = {};

var Sequelize = require("sequelize");
var sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "repository.js");
    })
    .forEach(function(file) {
        var model = sequelize["import"](path.join(__dirname, file));
        models[model.name] = model;
    });

Object.keys(models).forEach(function(modelName) {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
    }
});

module.exports = {models: models, db: sequelize};