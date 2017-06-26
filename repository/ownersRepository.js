var repository  = require("../models/repository.js");
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

var createOwnersToCompany = function (owner,companyId) {
     console.log('aqui 4')
     return new Promise(function (resolve, reject) {
          console.log('aqui 5')
          repository.models.ownerscompanies.create({"OwnerId" : owner.Id, "CompanyId" : companyId}).then(function (data) {
           	 resolve(data)
            }).error (function (err) {
              reject(err);
         });
    });
}

var find = function (companyId) {
     return new Promise(function (resolve, reject) {
         console.log(companyId)
        var query = "SELECT o.Id as ownerId, o.Name as Name, o.Email as Email FROM owners o\
        RIGHT JOIN ownerscompanies oc on oc.OwnerId = o.Id\
         WHERE oc.CompanyId = :companyId";
    
        repository.db.query(query,{  replacements: { companyId: companyId} })
            .then(owners => {
                console.log(owners[0])
                    resolve(owners[0])
                // We don't need spread here, since only the results will be returned for select queries
            }).error (function (err) {
                reject(err);
            })
    });
}


module.exports = {
    create: create,
    createOwnersToCompany: createOwnersToCompany,
    find: find
}