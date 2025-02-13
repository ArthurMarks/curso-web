// Programa que gera um jogo de adivinhações
const input = require('prompt-sync')()
const chalk = require('chalk')

const rNumber = Math.floor(Math.random()*100+1)
let pNumber, attemps = 0

console.log('Adivinhe um número de 1 a 100:')

while (true) {
    pNumber = parseInt(input('Chute: '))
    attemps++

    if (pNumber == rNumber) {
        console.log(chalk.green(`Você venceu! Tentativas: ${attemps}`))
        break
    } else {
        console.log(chalk.red('Você errou.'), chalk.yellow(`O número sorteado é ${rNumber > pNumber ? 'maior' : 'menor'}.`))
    }
}
