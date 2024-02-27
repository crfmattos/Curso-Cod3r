function Pessoa(nome) {
// fiz mas faltou isso só, entretanto, funciona da forma que eu fiz só não é a melhor maneira então adicionei
    this.nome = nome


    this.falar = function() {
         console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Gabriel')
p1.falar()
