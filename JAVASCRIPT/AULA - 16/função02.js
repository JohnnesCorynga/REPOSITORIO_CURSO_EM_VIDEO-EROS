function somar(n1, n2){
    return n1 + n2
}
console.log(somar(2,5))

function multiplicar(n1=1, n2=1){   /*pode predefinir os parametros caso não seja 
                                      adicionado nenhum valor na chamada*/
return n1*n2
}
console.log(multiplicar(2,5)) // normal
console.log(multiplicar(8)) // n1 recebe 8 e n2 recebe 1 como está predefinido
