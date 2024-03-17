const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa queboru o carro! -> remove o último elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na última posição do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um novo elemento na primeira posição
console.log(pilotos)

// Adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elementos
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Gera um novo array a partir do índice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // primeiro parâmetro -> a posição de onde irá iniciar, segundo parâmetro -> até onde será pego excluindo a posição do parâmetro
console.log(algunsPilotos2) 