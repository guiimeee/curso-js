function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let fAno = document.querySelector('#txtano')
  let res = document.querySelector('#res')

  if(fAno.value.length == 0 || Number(fAno.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let fSex = document.getElementsByName('radsex')
    let idade = ano - Number(fAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fSex[0].checked) {
      genero = 'Homem'
      if(idade >= 0 && idade < 10) {
        img.setAttribute('src', './menino-bebe.png')
      } else if(idade < 21) {
        img.setAttribute('src', './homem-jovem.png')
      } else if(idade < 50) {
        img.setAttribute('src', './homem-adulto.png')
      } else {
        img.setAttribute('src', './homem-idoso.png')
      }
    } else {
      genero = 'Mulher'
      if(idade >= 0 && idade < 10) {
        img.setAttribute('src', './menina-bebe.png')
      } else if(idade < 21) {
        img.setAttribute('src', './mulher-jovem.png')
      } else if(idade < 50) {
        img.setAttribute('src', './mulher-adulta.png')
      } else {
        img.setAttribute('src', './mulher-idosa.png')
      }
    }
    res.innerHTML = `Identificamos que você é ${genero} e tem ${idade}`
    res.appendChild(img)
  }

}