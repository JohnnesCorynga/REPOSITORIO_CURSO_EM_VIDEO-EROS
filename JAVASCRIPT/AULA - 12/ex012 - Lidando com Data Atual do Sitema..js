var agora = new Date() // pega as horas, minusto, segundos, datas, mes, ano e etc.
var hora = agora.getHours()
console.log(`Agrora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
}   else if(hora < 18 ){
        console.log('Boa tarde!')
    } else {
        console.log('Boa noite!')
    }