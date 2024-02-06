let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // o ++ foi executado antes da comparação logo num1 valia 2 em o -- só depois da comparação, logo num2 continuou valendo 2 durante a comparação, sendo assim retornando true
console.log(num1 === num2)