function promocaoIfood(valor){
    let resultado = valor;

    if (valor > 100) {
        resultado = valor - (valor * 0.2);
    }

    return resultado;  // valor sem alteração se for menor ou igual a 100
}

module.exports = promocaoIfood

1000

// 1000  100%
//  X    20%
// 100X  = 1000 * 20
// X = 1000 * /100
// X = 1000 * 0.2 = 200
// X 33% -> X * 0.33
// X 1% -> x * 0.01