require('dotenv').config() 
const express = require('express')
const app = express()
const enderecoModel = require('./model/enderecoModel')

app.use(express.json()) // para que o express entenda o json

app.get('/enderecos', async (req, res) => {
    const enderecos = await enderecoModel.getAll() //Essa função foi criada para buscar todos os endereços no banco de dados  usando o método getAll().
    res.json(enderecos) //Retorna a lista de endereços em formato JSON.
})

app.get('/enderecos/buscar', async (req, res) => {
    const buscarEndereco = await enderecoModel.getAdvanced(req.query) //Essa função foi criada para buscar endereços atraves de outras informacoes,como bairro,cidade,etc.
    res.json(buscarEndereco) //Retorna a lista de endereços em formato JSON.
})

app.get('/enderecos/:id', async (req, res) => {
    const endereco = await enderecoModel.getById(req.params.id) //Essa função foi criada para buscar endereços atraves do id.
    res.json(endereco) //Retorna o endereço em formato JSON.
})

app.post('/enderecos', async (req, res) => {
    const novoEndereco = await enderecoModel.insert(req.body) //Essa função adiciona um no endereço no banco de dados.O id não precisa ser mencionado na criacao.
    res.json(novoEndereco) //Retorna o endereço criado em formato JSON.
})

app.put('/enderecos/:id', async (req, res) => {
    const atualizaEndereco = await enderecoModel.update(req.body, req.params.id) //Essa função atualiza um endereço no banco de dados atraves do id.
    res.json(atualizaEndereco) //Retorna o endereço atualizado em formato JSON.
})

app.delete('/enderecos/:id', async (req, res) => {
    const deletaEndereco = await enderecoModel.remove(req.params.id) //essa função deleta um endereço no banco de dados atraves do id.
    res.json(deletaEndereco) //Retorna o endereço deletado em formato JSON.
})

// Inicia o servidor na porta 3000
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})