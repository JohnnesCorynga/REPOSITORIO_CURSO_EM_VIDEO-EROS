// FUNÇÃO TABUADA DE ADIÇÃO
function gerar(){
    let num = window.document.getElementById('numero')
    let s = window.document.getElementById('resSoma')
    let Sb = window.document.getElementById('resSub')
    let m = window.document.getElementById('resMulti')
    let Dv = window.document.getElementById('resDiv')
    
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, Digite um número!')
    }else {    
        let num1 = Number(num.value)
        let c = 1
        let d = 1
        let e = 1
        let f = 1
        s.innerHTML = ''
        Sb.innerHTML = ''
        m.innerHTML = ''
        Dv.innerHTML = ''

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