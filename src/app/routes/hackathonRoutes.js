const express = require('express')
const hackathonRouter = express.Router()

hackathonRouter.get('/:identificador', (req, resp)=>{
    resp.send(`Dados do Hackathon Stefanini. Identificador: ${req.params.identificador}`)
})

hackathonRouter.post('', (req, resp)=>{
    let body = req.body;
    resp.send(`Informações do Usuario.\nNome: ${body.nome}\nTelefone:${body.telefone}`)
})

hackathonRouter.put('/:identificador', (req, resp)=>{
    resp.send(`Dados do Hackathon Stefanini - Metodo PUT. Identificador: ${req.params.identificador}`)
})

hackathonRouter.patch('/:identificador', (req, resp)=>{
    resp.send(`Dados do Hackathon Stefanini - Metodo PATCH. Identificador: ${req.params.identificador}`)
})

hackathonRouter.delete('/:identificador', (req, resp)=>{
    resp.send(`Dados do Hackathon Stefanini - Metodo DELETE. Identificador: ${req.params.identificador}`)
})

module.exports = hackathonRouter