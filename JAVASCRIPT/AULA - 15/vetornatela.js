let numeros = [3, 5, 2, 8, 4, 9]
/*numeros.push(7,1,6)
numeros.sort()
console.log(`O tamanho do vetor é ${numeros.length}`)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])     // CÓDIGO BURRO DE SE FAZER
console.log(numeros[6])
console.log(numeros[7])
console.log(numeros[8])
console.log(numeros[9])*/

/*for(let pos = 0; pos <= numeros.length; pos++){
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)     //FORMA CORRETA 
}*/
numeros.sort() //coloca na ordem
for(let pos in numeros){
    console.log(`A posição ${pos} tem valores ${numeros[pos]}`)
}

