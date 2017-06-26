var ownersService  =  require('../services/ownersService.js');
var ownersRepository  =  require('../repository/ownersRepository.js');

var Promise = require("bluebird");

var  createOwner =  function (req,res) {
    var owner  = '';
        ownersService
            .ownerMapping(req.body)
            .then(function(owner){
                console.log('aqui 1')
                ownersRepository
                    .create(owner)
                    .then(function(data){
                         console.log('aqui 2')
                        ownersRepository
                            .createOwnersToCompany(data, req.body.companyId)
                            .then(function(ownersToCompany){
                                 console.log('aqui 3')
                                res.json({success: true, message:  data })     
                            })
                            .catch (function (err) {
                                console.log('novo erro', err)
                                res.status(400).send(err);
                        }); 
                    })
                    .catch (function (err) {
                        console.log('novo erro', err)
                         res.status(400).send(err);
                   });
           })
           .catch (function (err) {
                res.status(400).send(err);
            });
    }

 var findOwnersByCompanyId = function (req,res) {
     console.log(req.params.companyId)
     ownersRepository
        .find(req.params.companyId)
        .then(function(data){
            res.json({success: true, message:  data })     
         })
         .catch (function (err) {
            console.log('novo erro', err)
            res.status(400).send(err);
         });
     }

module.exports = {
    createOwner : createOwner,
    findOwnersByCompanyId : findOwnersByCompanyId
}