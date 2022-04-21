const express = require('express');
const router = express.Router();

router.get('/:id?', function(req,res) {
    res.send({nome: "Notas Get " + req.params.id});
})

router.post('/:id',function(req,res) {
    console.log(req.body);

    res.send("Adicao");
})

router.put('/:id',function(req,res) {
    console.log(req.body);

    res.send("Alteracao");
})

router.delete('/:id',function(req,res) {
    console.log(req.body);

    res.send("Delete");
})

module.exports = router
