// var target_date = new Date("october 09, 2020").getTime();
// var dias, horas, minutos, segundos;
// var regressiva = document.getElementById("regressiva");

// setInterval(function () {

//     var current_date = new Date().getTime();
//     var segundos_f = (target_date - current_date) / 1000;

//     dias = parseInt(segundos_f / 86400);
//     segundos_f = segundos_f % 86400;

//     horas = parseInt(segundos_f / 3600);
//     segundos_f = segundos_f % 3600;

//     minutos = parseInt(segundos_f / 60);
//     segundos = parseInt(segundos_f % 60);

//     // document.getElementById('dia').innerHTML = dias;
//     document.getElementById('hora').innerHTML = horas;
//     document.getElementById('minuto').innerHTML = minutos;
//     document.getElementById('segundo').innerHTML = segundos;


// }, 1000);


var minuto = document.getElementById("minuto")
var segundo = document.getElementById("segundo")

function iniciarContador(m_init){
    minuto.innerHTML = (( m_init -1 ) > 9 ) ? ('' + ( m_init -1 )) : ('0' + ( m_init - 1));
    segundo.innerHTML = '00';

    var m = 1
    var s = 30

    var contador = setInterval(function() {
        minuto.innerHTML = (m > 9) ? ('' + m) : ('0' + m)
        segundo.innerHTML = (s > 9) ? ('' + s) : ('0' + s)

        if(s > 0) s -= 1;
        else if(s == 0 && m > 0) { s = 59; m-= 1}
        else {m - m_init}
    }, 1000)
}


iniciarContador(1)