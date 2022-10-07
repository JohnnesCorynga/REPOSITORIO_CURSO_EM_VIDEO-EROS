let num = window.document.querySelector('input#numPrincipal')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        false
    }
}

function adicionar (){ 
    if(isNumero(num.value) && !inLista(num.value, valores)){
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
}
/*
numerosSalvos.push(num)

if(num == 0 || num > 100 || num < 0){
    window.alert('[ERRO] Verifique os dados digitados!')        
} 
    else{
    let item = document.createElement('option')
    res.appendChild(item)
    item.innerHTML = `O valor ${numerosSalvos} foi adicionado.`
    }  
}
    function gerar(){ 
    let resRelFinal = window.document.getElementById('resultadoRelFinal')
    resRelFinal.innerHTML = `Temos ao todo ${m}`   
     
}
*/