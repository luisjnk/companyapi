var Promise = require("bluebird");

var companyMapping = function (request) {
    return new Promise(function (resolve, reject) {
        var company = {
            Id: request.Id,
            Name: request.Name,
            Address: request.Address,
            City: request.City,
            Country: request.Country,
            Email: request.Email,
            Phone: request.Phone,
        }
        resolve(company);
    });
}


module.exports = {
    companyMapping: companyMapping
}