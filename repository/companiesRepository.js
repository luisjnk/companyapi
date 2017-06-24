var repository  = require("../models/repository.js");
var sequelize = require("sequelize");
var Promise = require("bluebird");

var create = function (company) {
     return new Promise(function (resolve, reject) {
          repository.models.companies.create(company).then(function (data) {
           	 resolve(data)
            }).error (function (err) {
              reject(err);
         });
    });
}

var findAll = function () {
     return new Promise(function (resolve, reject) {
          repository.models.companies.findAll().then(function (data) {
           	 resolve(data)
            }).error (function (err) {
              reject(err);
         });
    });
}

var findCompany = function (Id) {
     return new Promise(function (resolve, reject) {
          repository.models.companies.findById(Id).then(function (data) {
           	 resolve(data)
            }).error (function (err) {
              reject(err);
         });
    });
}

var updateCompany = function (company) {
     return new Promise(function (resolve, reject) {
           	 repository.models.companies.update(company,  {where: { id: company.Id } } )
                .then(function (data) {
                    resolve(data);
            }).error (function (err) {
              reject(err);
         });
    });
}


module.exports = {
    create: create,
    findAll: findAll,
    findCompany: findCompany,
    updateCompany: updateCompany
}