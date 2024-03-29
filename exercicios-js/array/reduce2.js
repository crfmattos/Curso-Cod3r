const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista == true
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
const desafio1 = alunos.map(a => a.bolsista).reduce(function(previous, current) {
    if(previous && current == true) {
        return true
    } false
})
console.log(desafio1)
// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista == true
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))