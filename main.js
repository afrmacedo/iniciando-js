alert('Hello World!')

let numberOne = Number(prompt('Digite o primeiro número a ser somado'))
let numberTwo = Number(prompt('Digite o segundo número a ser somado'))
const sum = numberOne + numberTwo

alert(`A soma de ${numberOne} com ${numberTwo} é de ${sum}`)

if (!isNaN(sum)) {
  alert('É um número')
} else {
  alert('Não é um número')
}

if (typeof sum === String) {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

if (typeof sum === Boolean) {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

const sub = numberOne - numberTwo
alert(`A subtração de ${numberOne} com ${numberTwo} é de ${sub}`)

const mult = numberOne * numberTwo
alert(`A multiplicação de ${numberOne} com ${numberTwo} é de ${mult}`)

const div = numberOne / numberTwo
alert(`A divisão de ${numberOne} com ${numberTwo} é de ${div}`)

if (sum % 2 === 0) {
  alert('O resultado da soma é um numero par')
} else {
  alert('O resultado da soma é um numero impar')
}

if (sub % 2 !== 0) {
  alert('O resultado da subtração é um numero impar')
} else {
  alert('O resultado da subtração não é um número impar')
}