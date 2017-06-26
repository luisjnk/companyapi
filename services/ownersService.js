var Promise = require("bluebird");

var ownerMapping = function (request) {
    return new Promise(function (resolve, reject) {
        var owner = {
            Id: request.Id,
            Name: request.name,
            Email: request.email,
        }
          resolve(owner);
    });
}


module.exports = {
    ownerMapping: ownerMapping
}