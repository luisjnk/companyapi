var ownersService  =  require('../services/ownersService.js');
var ownersRepository  =  require('../repository/ownersRepository.js');

var Promise = require("bluebird");

var  createOwner =  function (req,res) {
    var owner  = '';
        ownersService
            .ownerMapping(req.body)
            .then(function(owner){
                ownersRepository
                    .create(owner)
                    .then(function(data){
                        res.json({success: true, message:  data })     
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

module.exports = {
    createOwner : createOwner
}