function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10 // você tambem pode lançar um número
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro. message,
        date: new Date
    }
}
function imprimirNomeGritador(obj) {
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritador(obj)