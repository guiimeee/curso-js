function load() {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes().toString().padStart(2, '0')
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')

    msg.innerHTML = `Agora são ${hora}h${minutos}`
    if(hora < 12) {
        img.src = './manha.png'
        document.body.style.background = '#FFAB3E'
    } else if(hora < 18) {
        img.src = './tarde.png'
        document.body.style.background = '#A39A9B'
    } else {
        img.src = './noite.png'
        document.body.style.background = '#022744'
    }

}