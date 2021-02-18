
function carregar() {
    var msg = Window.document.getElementById("msg");
    var imagem = Window.document.getElementById("imagem");
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 12){

    }else if(hora >= 12 && hora <= 18){

    }else{

    }

}