import prompt from 'prompt-sync'
let ler = prompt ()
import { depositar, sacar, exibirSaldo, simular } from './financeiro.js'

export function menu(saldo) {
let escolha = Number ()
let saldoAtual = 0

do {
        console.log(`
        1. Depositar
        2. Sacar
        3. Visualizar saldo
        4. Simular Investimento
        0. Sair`)
        escolha = Number (ler ())
        if (escolha == 1) {
            let deposito = depositar (saldo)
            saldoAtual += deposito
        } else if (escolha == 2) {
            let saque = sacar(saldo)
            saldoAtual -= saque
        } else if (escolha == 3) {
            let exibir = exibirSaldo(saldoAtual)
            console.log(`O seu saldo atual é de: R$${exibir}`)
        } else if (escolha == 4) {
            console.log('SIMULADOR DE INVESTIMENT0')
            console.log('Informe a taxa de juros:')
            let juros = Number (ler ())
            console.log('Informe o tempo investido:')
            let tempoInvestido = Number (ler ())
            console.log('Informe a capital inicial:')
            let capitalInicial = Number (ler ())
            let simulacao = simular(juros,tempoInvestido,capitalInicial)
            console.log(simulacao)
        }
    } while (escolha != 0)

    return saldoAtual
}