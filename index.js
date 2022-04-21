const express = require ('express');
const app = express();
const usuario = require('./rotas/usuario');
const notas = require('./rotas/notas')

app.use(express.json())

app.get("/", function (req, res) {
        res.send("Hello Word!");
})

app.use('/usuario', usuario);
app.use('/notas', notas);

app.listen(3000, function (){
    console.log("Servidor rodando na porta 3000")
})