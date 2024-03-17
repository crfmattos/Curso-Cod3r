Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // this -> O próprio array
    }
}


// Minha tentativa
let forEach2 = function(nome, indice, x) {
    for(let i = 0; i < x; i++){
        console.log(`${i + 1}) ${x[i]}`)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Apenas 3 parâmretros no forEach
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

console.log(forEach2(aprovados))