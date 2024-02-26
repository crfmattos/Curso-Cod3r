console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    x - y
}
console.log(sub(3, 4)) // Só pode ser executada após ter sido declarada

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // Só pode ser executada após ter sido declarada