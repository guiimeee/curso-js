let valores = [5, 8, 6, 7, 4, 2, 3]

console.log(valores)

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// OR

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}