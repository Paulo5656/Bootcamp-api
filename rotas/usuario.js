const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', function(req,res) {
    res.send({nome: "Paulo"});
})

router.post('/',function(req,res) {
    console.log(req.body);

    res.send("Adicao");
})

router.put('/',function(req,res) {
    console.log(req.body);

    res.send("Alteracao");
})

router.delete('/',function(req,res) {
    console.log(req.body);

    res.send("Delete");
})

module.exports = router
