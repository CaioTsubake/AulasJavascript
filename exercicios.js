function promocaoIfood(valor){
    if (valor < 100) {
        return valor 
    }
    else {
        if (valor > 100){
             return valor * 0.8
        }
        else {
            if (valor == 100){
                return valor
            }
        }
    }
}

module.exports = promocaoIfood