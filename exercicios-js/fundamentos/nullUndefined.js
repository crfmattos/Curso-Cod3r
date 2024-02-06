let valor // Não inicializada
console.log(valor) // valor da variável é undefined, pois não recebeu nenhum valor
/*console.log(valor2)*/ // valor da variável é is not defined, pois a variável não foi declarada

valor = null // ausência de valor(não aponta para nenhum local na memória)
console.log(valor)
/*console.log(valor.toString())*/ // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco == null // sem preço
console.log(!!produto.preco)
console.log(produto)