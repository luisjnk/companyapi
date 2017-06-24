var Promise = require("bluebird");

var ownerMapping = function (request) {
    return new Promise(function (resolve, reject) {
        var owner = {
            Id: request.Id,
            Name: request.Name,
           Email: request.Email,
        }
        resolve(owner);
    });
}


module.exports = {
    ownerMapping: ownerMapping
}