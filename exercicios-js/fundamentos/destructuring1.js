// novo recurso do ES2015

const pessoa = {
    nome: 'Ana', 
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa 
console.log(nome, pessoa)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //se nao vier nenhum dado, por padrão foi definido que bemHumorada receberá true
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num) // Errado
