const express = require('express')
const app = express()

app.use(express.json())

app.get('/operacoes/somar/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params
    const sum = Number(num1) + Number(num2)

    res.json({ "resultado": sum })
})

app.post('/nome-completo', (req, res) => {
    const { name, surname } = req.body
    const completeName = `${name} ${surname}`

    res.json({ "nomeCompleto": completeName })
})

app.get('/numeros/verificar/:num', (req, res) => {
    const num = parseInt(req.params.num)
    const verify = num % 2 == 0 ? 'par' : 'ímpar'

    res.json({ "numero": num, "resultado": verify })
})

app.get('/texto/inverter', (req, res) => {
    const text = req.query.text
    const invertedText = text.split('').reverse().join('')

    res.json({ "original": text, "invertido": invertedText })
})

app.get('/equacao-segundo-grau/:a/:b/:c', (req, res) => {
    const { a, b, c } = req.params

    const delta = b ** 2 - 4 * a * c

    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)

    const result = delta > 0 ? [x1, x2] : delta == 0 ? x1 : "Não possui raiz real"

    res.json({ "delta": delta, "raizes": result })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
