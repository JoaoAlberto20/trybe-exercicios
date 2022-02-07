

// Atividade 1
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

/* let numbers = [5,9,3,19,70,8,100,2,35,27];

for(let i = 0; i < numbers.length; i += 1)
{
    console.log(numbers[i]);
}
 */

// Atividade 2
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;


/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum =0;

for(let i = 0; i < numbers.length; i += 1)
{
 
    sum += numbers[i];
    
}


console.log(sum);

 */

 // Atividade 3
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1)
{
    sum += numbers[i];
    media = sum / numbers.length
}

console.log(media);
 */


// Atividade 
/* Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;



for (let i = 0; i < numbers.length; i += 1)
{
    sum += numbers[i];
    media = sum / numbers.length
    
}

if (media > 20){

    console.log('Valor é maior que 20');
} else {

    console.log('Valor é menor que 20');
}
 */


// Atividade 5
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;


/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (let i = 0; i < numbers.length; i += 1)
{
    if(numbers[i] > maiorNumero)
    {
        maiorNumero = numbers[i];
    }
}

console.log(maiorNumero); */


// Atividade 6
/* Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersImpar = 0;

for (let i = 0; i < numbers.length; i += 1)
{
    if (numbers[i] % 2 != 0)
    {
        numbersImpar += 1;
    }
}

if (numbersImpar === 0) 
{   
    console.log (numbersImpar);
    
} else {

    console.log("Nenhum valor impar encontrado");
} */


// Atividade 7
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for (let i = 0; i < numbers.length; i += 1)
{
    if(numbers[i] < menorNumero)
    {
        menorNumero = numbers[i];
    }
}

console.log(menorNumero);  */


// Atividade 8
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;


/* let numbers = [];

for (let i = 1; i <= 25; i += 1)
{
    numbers.push(i);
}

console.log(numbers); */

// Atividade 9
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .


/* let numbers = [];

for (let i = 1; i <= 25; i += 1)
{   
    numbers.push(i);

    for( let j = 0; j < numbers.length; j += 1 )
    {
        console.log(numbers[j] / 2); 
    }

}
    
 */

