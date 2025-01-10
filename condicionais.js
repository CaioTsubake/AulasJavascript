// Boolean | Booleano
let decisao = true; //Verdadeiro
let outraDecisao = false; // Falso

let saldo = 1000;
let gasto = 1000;

if(gasto > saldo){ // se
    console.log("Saldo Insuficiente, compra recusada");
}
else {
    saldo = saldo - gasto;
    if (saldo == 0) {
        console.log("Atenção, seu saldo este mês acabou.")
    }
}

console.log("Saldo Final: " + saldo)
console.log("Final do programa")