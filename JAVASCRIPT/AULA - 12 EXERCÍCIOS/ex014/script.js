function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    minuto.toFixed(2)
   
    var dataDia = data.getDate()
    var dataMes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Outubro", "Novembro", "Dezembro")
    var dataAno = data.getFullYear()
    var diaSemana = new Array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');
    msg.innerHTML = `Agora são exatamente <strong>${hora}:${minuto}</strong> horas.`
    msg2.innerHTML = `Hoje é ${diaSemana[data.getDay()]}, Dia ${dataDia} de ${dataMes[data.getMonth()]} de ${dataAno}.`
    if(hora >= 0 && hora < 5){
        //BOA MADRUGADA
        img.src = 'fotomadrugada.png'
        window.document.body.style.background = '#464343'

    } else if(hora >= 5 && hora <12){
        //BOM DIA
        img.src = 'fotodia.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        saudacao.innerHTML = `BOA TARDE! Tenha um otimo dia...`
    } else{
        //BOA NOITE
        img.src = 'fotonoite.pmg'
        document.body.style.background = '#515154'
        saudacao.innerHTML = `BOA NOITE! Tenha uma ótimaaa e abençoada noite`
    }
}
