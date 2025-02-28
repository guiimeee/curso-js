function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if(num.value.length == 0) {
        alert('Por favor, Digite um número!')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        let c = 1
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tab.appendChild(item)
            c++
        }
    }
}