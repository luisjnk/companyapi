var repository  = require("../models/repository.js");
var sequelize = require("sequelize");
var Promise = require("bluebird");

var create = function (owner) {
     return new Promise(function (resolve, reject) {
          repository.models.owners.create(owner).then(function (data) {
           	 resolve(data)
            }).error (function (err) {
              reject(err);
         });
    });
}


module.exports = {
    create:create
}