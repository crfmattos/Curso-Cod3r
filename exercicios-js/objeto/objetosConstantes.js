// pessoa -> endereço de memória(123) -> objeto{...}
const pessoa = { nome: 'João' }
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- endereço(456) -> {...}
// pessoa = { nome: 'Ana'} // Vai dar erro por apontar para outro endereço de memória ao criar um novo Objeto

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome) // O objeto continua igual sem ter sido alterado
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
