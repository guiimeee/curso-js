function contar() {
    let ini = document.querySelector('#num1')
    let fim = document.querySelector('#num2')
    let pass = document.querySelector('#num3')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contador: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}