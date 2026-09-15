const express = require("express")
const cors = require("cors")

// import express from "express"
// import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
// {
//     "nome"; "pedro",
//     "curso"; "Desenvolvimento de Sistema"
// }

let ALUNOS = [
    {id: 1, nome: "Alice", curso: "Desenvolvimento de sistemas"},
    {id: 2, nome: "Brenda", curso: "Redes de computadores"},
    {id: 3, nome: "Brenno", curso: "Administração"},
    {id: 4, nome: "Carlos", curso: "Desenvolvimento de sistemas"},
]

app.get("/", (req, res)=>{
    res.json({
        mensagem: "API alunos funcionando!"
    });
});

app.get("/alunos", (req, res)=>{
    res.json(ALUNOS);
});

const PORTA = 3000;

app.listen(PORTA,()=>{
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`https://localhost:${`${PORTA}`}`)
})