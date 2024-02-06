// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Uma coisa estranha que pode acontecer em js, ele permite não passar um parâmetro
// 2 + Undefined = NaN
imprimirSoma(2, 10, 4, 6, 7, 8) // Ou... passar mais de dois parametros e ele irá ignorar

// Funcao com retorno
function soma (a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))