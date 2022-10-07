var idade = 63
console.log(`Você tem ${idade} anos.` )
if (idade < 16) {
    console.log('Menor de 16, não vota')
} else if(idade < 18 || idade >= 65) {
    console.log('Voto Opcional')
} else {
     console.log('Voto obrigatório')
}