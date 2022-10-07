// FUNÇÃO TABUADA DE ADIÇÃO
function gerar(){
    let num = window.document.getElementById('numero')
    let s = window.document.getElementById('resSoma')
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, Digite um número!')
    }else {    
        let num1 = Number(num.value)
        let c = 1
        s.innerHTML = ''
      while(c<=10){
          let item = document.createElement('option')
        item.text = `${num1} + ${c} = ${num1+c}`
        s.appendChild(item)
        item.value = `tab${c}`
        c++
      }
    }   
}
// FUNÇÃO TABUADA DE SUBTRAÇÃO
function gerar(){
    let num = window.document.getElementById('numero')
    let Sb = window.document.getElementById('resSub')
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, Digite um número!')
    }else {    
        let num1 = Number(num.value)
        let d = 1
        Sb.innerHTML = ''
      while(d<=10){
          let item = document.createElement('option')
        item.text = `${num1} - ${d} = ${num1-d}`
        Sb.appendChild(item)
        item.value = `tab${d}`
        d++
      }
    }   
}
// FUNÇÃO TABUADA DE MULTIPLICAÇÃO
function gerar(){
    let num = window.document.getElementById('numero')
    let s = window.document.getElementById('resSoma')
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, Digite um número!')
    }else {    
        let num1 = Number(num.value)
        let c = 1
        s.innerHTML = ''
      while(c<=10){
          let item = document.createElement('option')
        item.text = `${num1} + ${c} = ${num1+c}`
        s.appendChild(item)
        item.value = `tab${c}`
        c++
      }
    }   
}
// FUNÇÃO TABUADA DE DIVISÃO
function gerar(){
    let num = window.document.getElementById('numero')
    let s = window.document.getElementById('resSoma')
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, Digite um número!')
    }else {    
        let num1 = Number(num.value)
        let c = 1
        s.innerHTML = ''
      while(c<=10){
          let item = document.createElement('option')
        item.text = `${num1} + ${c} = ${num1+c}`
        s.appendChild(item)
        item.value = `tab${c}`
        c++
      }
    }   
}
