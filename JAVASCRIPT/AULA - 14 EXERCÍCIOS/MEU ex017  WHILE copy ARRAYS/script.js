// FUNÇÃO TABUADA DE ADIÇÃO
function gerar(){
  let dadosInput = [window.document.getElementById('numero'), window.document.getElementById('resSoma'), window.document.getElementById('resSub'), window.document.getElementById('resMulti'), window.document.getElementById('resDiv')]

    
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, Digite um número!')
    }else {    
        let num1 = Number(dadosInput[0].value)
  
        d
        adosInput[1].innerHTML = ''
        dadosInput[2].innerHTML = ''
        dadosInput[3].innerHTML = ''
        dadosInput[4].innerHTML = ''

      while(c<=10){
          let item = document.createElement('option')
        item.text = `${num1} + ${c} = ${num1+c}`
        s.appendChild(item)
        item.value = `tab${c}`
        c++
      }
      
      while(d<=10){
        let item = document.createElement('option')
        item.text = `${num1} - ${d} = ${num1-d}`
        Sb.appendChild(item)
        item.value = `tab${d}`
        d++
      }
      while(e<=10){
        let item = document.createElement('option')
        item.text = `${num1} x ${e} = ${num1*e}`
        m.appendChild(item)
        item.value = `tab${e}`
        e++
      } 
      while(f<=10){
        let item = document.createElement('option')
        item.text = `${num1} % ${f} = ${num1/f}`
        Dv.appendChild(item)
        item.value = `tab${f}`
        f++
      }
    }   
}