const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os números

// Minha resolução
const objCarrinho = carrinho.map(function(e) {
    return JSON.parse(e)
}) 

const apensNums = objCarrinho.map(function(produto) {
    return produto.preco
})
console.log(apensNums)


// Resolução do curso

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)