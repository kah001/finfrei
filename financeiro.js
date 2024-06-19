import prompt from 'prompt-sync'
let ler = prompt ()

export function depositar(saldo) {
    console.log('Valor do depósito:')
    let depositado = Number (ler ())

    while (depositado <= 0) {
        console.log('Valor do depósito:')
        depositado = Number (ler ())
    }

    let novoValor = saldo + depositado
    return novoValor
}

export function sacar(saldo) {
    console.log('Valor que deseja sacar:')
    let sacado = Number (ler ())

    while (sacado <= 0) {
        console.log('Valor que deseja sacar:')
        sacado = Number (ler ())
    }

    let saldoAtual = saldo - sacado
    return saldoAtual
}

export function exibirSaldo(saldoAtual) {
    let resposta = saldoAtual

    return resposta
}

export function simular(juros,tempoInvestido,capitalInicial) {
    let total = capitalInicial * (1 + (juros/100)) ** tempoInvestido

    return total 
}