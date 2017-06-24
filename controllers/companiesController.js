var companiesService  =  require('../services/companiesService.js');
var companiesRepository  =  require('../repository/companiesRepository.js');

var Promise = require("bluebird");

var  createCompany =  function (req,res) {
    var companies  = '';
        companiesService
            .companyMapping(req.body)
            .then(function(company){
                companiesRepository
                    .create(company)
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

var findAll = function (req,res) {
     companiesRepository
        .findAll()
        .then(function(data){
            res.json({success: true, message:  data })     
         })
        .catch (function (err) {
            console.log('novo erro', err)
             res.status(400).send(err);
        });
}

var findCompany = function (req,res) {
    console.log(req.params.Id)
    companiesRepository
        .findCompany(req.params.Id)
        .then(function(data){
            res.json({success: true, message:  data })     
         })
        .catch (function (err) {
            console.log('novo erro', err)
             res.status(400).send(err);
        });
}

var  updateCompany =  function (req,res) {
    var companies  = '';
        companiesService
            .companyMapping(req.body)
            .then(function(company){
                companiesRepository
                    .updateCompany(company)
                    .then(function(data){
                        res.json({success: true, message:  data })     
                    })
                    .catch (function (err) {
                        console.log('novo erro', err)
                         res.status(400).send(err);
                   });
           })
           .catch (function (err) {
               console.log(' erro', err)
                res.status(400).send(err);
            });
    }


module.exports = {
    createCompany : createCompany,
    findAll : findAll,
    findCompany : findCompany,
    updateCompany : updateCompany
}