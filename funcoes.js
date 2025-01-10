// Função é um bloco de codigo que faz alguma coisa
// Conta Bancaria
let nomeDonoConta = "Heng";
// 1a receber as entradas
let ganhosTotal = receberGanhos();
console.log(ganhosTotal)


// 1b receber as saidas
let saidasTotal = receberSaidas();
console.log(saidasTotal)

// 2 calcular o total (saldo)
let saldo = ganhosTotal - saidasTotal;


// 3 mostrar o resultado
mostrarSaldo(nomeDonoConta, saldo);
mostrarSaldo("Johana", 2000);
mostrarSaldo("Mike")

function receberGanhos(){
    let ganhos = 10000;
    let ganho2 = 1000;
    let ganho3 = 1000;
    let ganhosTotal = ganhos + ganho2 + ganho3;

    return ganhosTotal;
}

function receberSaidas(){
    let saida1 = 100;
    let saida2 = 32;
    let saida3 = 90;
    let saida4 = 10000

    let saidasTotal = saida1 + saida2 + saida3 + saida4;

    return saidasTotal;
}

function mostrarSaldo(nome, saldo){
    let saldo;
    console.log("Boa noite " + nome);
    console.log("O seu saldo é: " + saldo);
}