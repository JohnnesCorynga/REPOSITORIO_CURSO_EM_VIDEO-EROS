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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`   
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus() // Esses dois comandos fazem a caixa de texto do input ficar vazia sempre após eu salvar um valor.
    
}


    function gerar(){ 
        if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
