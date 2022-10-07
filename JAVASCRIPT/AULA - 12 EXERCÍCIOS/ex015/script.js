function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fAno = window.document.getElementById('txtano')
var res = window.document.querySelector('div#res')
var fCor = document.getElementsByName('radcor')
if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRRO] Verifique os dados e tente novamente!')
    } else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança.h
                img.setAttribute('src', 'criançahomem.png')
            } else if(idade <= 21){
                //jovem.h
                img.setAttribute('src', 'jovemhomem.png')
            } else if(idade < 55){
                //adulto.h
                img.setAttribute('src', 'adultohomem.png')
            } else{
                //idoso.h
                img.setAttribute('src', 'idosohomem.png')
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança.m
                img.setAttribute('src', 'criançamulher.png')
            } else if(idade <=21){
                //jovem.m
                img.setAttribute('src', 'jovemmulher.png')
            } else if(idade < 50){
                //adulto.m
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //idoso.m
                img.setAttribute('src', 'idosomulher.png')
            }
        }
         var cor = ''
            if(fCor[0].checked && fSex[0].checked) {
             cor = 'Branco'
            } else if(fCor[1].checked && fSex[0].checked) {
             cor = 'Pardo'
            } else if(fCor[2].checked && fSex[0].checked){
             cor = 'Negro'
            } else if(fCor[3] && fSex[0].checked){
            cor = 'Indígena'
            } 
            if(fCor[0].checked && fSex[1].checked){
            cor = 'Branca'
            } else if(fCor[1].checked && fSex[1].checked) {
            cor = 'Parda'
            } else if(fCor[2].checked && fSex[1].checked){
            cor = 'Negra'
            } else  if(fCor[3] && fSex[1].checked){
            cor = 'Indígena'
            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} ${cor} com ${idade} anos!`
        res.appendChild(img)
           
    }
}


