{
    {
        {
            { 
                var sera = 'Será???' // var é visível para fora do escopo, enquanto que a let apenas para seu escopo
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
/* console.log(local) */ // mas para funções isso não funciona :(
