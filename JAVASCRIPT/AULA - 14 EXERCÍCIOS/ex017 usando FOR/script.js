function gerar(){
    var num = window.document.getElementById('numero')
    var res = window.document.getElementById('resultado')
    var num1 = Number(num.value)
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, Digite um número!')
    }else {
        res.innerHTML = ''
      for(let c = 1;c<=10;c++){
        let item = document.createElement('option')
        item.innerHTML = `${num1} x ${c} = ${num1*c}`
        res.appendChild(item)
      }
    }   
    num.value=''
    num.focus()
}