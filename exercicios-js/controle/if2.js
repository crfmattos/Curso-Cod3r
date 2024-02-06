function teste1(num) {
    if(num > 7)
        console.log(num) // Apenas essa senteça esta associada ao bloco devido a ausência de chaves
        console.log('Final') // Sempre será executada independente do resultado por estar fora do bloco
}

// teste1(6)
// teste1(8)

function teste2(num) {
    if(num > 7) { // Cuidado com o ";", não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)