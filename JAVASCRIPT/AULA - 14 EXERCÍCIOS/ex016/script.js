function contar(){
    let cont1 = window.document.getElementById('contador1')
    let cont2 = window.document.getElementById('contador2')
    let cont3 = window.document.getElementById('contador3')
    let res = window.document.getElementById('resultado')
    if (cont1.value.length == 0 || cont2.value.length == 0 || cont3.value.length == 0) {
        res.innerHTML = `Impossível contar! Verifique os valores.`
        window.alert('[ERRO] Faltam daoos!')
    } else{
        res.innerHTML = 'Contando '
        let i = Number(cont1.value)
        let f = Number(cont2.value)
        let p = Number(cont3.value)
        res.innerHTML +=`de ${i} até ${f} de ${p} em ${p} fica: <br>`
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for(let c = i;c <= f;c += p){
            res.innerHTML += `${c} \u{1F449}`
            }  
        } else{
            //contagem decrescente
            for(let c = i;c >= f;c -= p){
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}' 
    }
}
/*
}*/