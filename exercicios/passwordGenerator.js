// Programa que gera senhas de acordo com as informações informados pelo usuário
const input = require('prompt-sync')()
const generator = require('generate-password')

const length = parseInt(input('Informe o tamanho da senha: '))
const wNumber = input('A senha deve incluir números? (S/N): ').toUpperCase() == 'S' ? true : false
const wSymbol = input('A senha deve incluir símbolos? (S/N): ').toUpperCase() == 'S' ? true : false

const password = generator.generate({
    length: length,
    numbers: wNumber,
    symbols: wSymbol
})

console.log(`Senha gerada: ${password}`)
