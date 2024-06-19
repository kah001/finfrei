import prompt from 'prompt-sync'
let ler = prompt ()

import { menu } from './menu.js'

console.log('- FIN FREI -')
console.log('Simplificando o gerenciamento financeiro para todos')
console.log()

console.log('Informe o seu saldo:')
let saldo = Number (ler ())
console.log()

let final = menu(saldo)
console.log(final)