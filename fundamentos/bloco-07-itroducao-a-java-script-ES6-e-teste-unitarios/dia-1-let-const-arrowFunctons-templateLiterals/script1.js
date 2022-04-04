// Crie uma função que receba um número e retorne seu fatorial.

//Function Normal
function fatorial  (number) {
    let soma = number;
    for(let index = 1; index < number; index += 1) {
       soma *= index;
    }
    return soma;
} 
console.log(fatorial(5));

//readequando o código para Arrow Function 
const fatorial2 = (number) => number <= 1 ? 1 : number * fatorial(number -1);
console.log(fatorial2(0));