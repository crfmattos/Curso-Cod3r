Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this) == true) {
            newArray.push(this[i])
        }    
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 24499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


// Resolução do curso
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter2(caro).filter2(fragil))