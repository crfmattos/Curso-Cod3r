// Documentação das funções mo site da MDN web docs develloper.mozila.org
const produtos = [
    { nome: 'Notebook', preco: 24499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// Minha resolução
console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil == true
}))

// Resolução do curso
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil))