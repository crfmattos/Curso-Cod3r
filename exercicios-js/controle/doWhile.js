function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * [max - min] + min
    return Math.floor(valor)
}

 let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O valor é ${opcao}`)
} while(opcao != -1)