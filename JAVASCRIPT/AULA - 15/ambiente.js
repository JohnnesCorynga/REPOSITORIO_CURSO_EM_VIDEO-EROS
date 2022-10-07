let num = [5,4,8,7,6] //cria uma variavel/Vetor/array com varios elementos
num.push(1) //adiciona mais um elemento ao final da array
//num.sort() // ordena de forma crescente os elementos da array
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = [num.indexOf(9), num.indexOf(8)] // indica em qual posição está o valor. no caso 9
if(pos == -1){
    console.log(`O valor ${pos[0]} não foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${pos[1]}`)
    console.log(`O valor 9 está na posição ${pos[0]}, e não foi encontrado!`)
}
