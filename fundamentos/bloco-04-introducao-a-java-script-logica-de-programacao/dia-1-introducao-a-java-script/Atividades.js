// Atividade 1

/*
let a = 10;

let b = 3;

// Atribua aqui o operador
let operador = '%';

let resultado;

if( operador === '+') {

    resultado = a + b;
    console.log("A soma de a e b é igual: " + resultado);

} else if (operador === "-") {

    resultado = a - b;
    console.log("A subtração de a e b é igual a:  " + resultado);

} else if (operador === "*") {

    resultado = a * b;
    console.log( "A multiplicação de a  e b é igua a: " + resultado);

} else if ( operador === "/") {

    resultado = a / b;
    console.log("A divisão de a e b é igual a: " + resultado);

} else if(resultado  === '%') {

    resultado = a % b;
    console.log("O resto de a e b é igual a: " + resultado);
}*/


//Atividade 2

/*
let primeiraVariavel = 200;
let segundaVariavel = 300;

let resultado;

if ( primeiraVariavel > segundaVariavel) {

    resultado = primeiraVariavel;
    
} else if ( segundaVariavel > primeiraVariavel) {

    resultado = segundaVariavel;
} 

console.log(resultado);*/


// Atividade 3

/*
let primeiroNumero = 500;
let segundoNumero = 100;
let teceiroNumero = 3000;

let resultado;

if (primeiroNumero > segundoNumero && segundoNumero > teceiroNumero) {

    resultado = primeiroNumero;
} else if (primeiroNumero > teceiroNumero && teceiroNumero > segundoNumero) {

    resultado = primeiroNumero;
} else if (segundoNumero > primeiroNumero && primeiroNumero > teceiroNumero) {
     
    resultado = segundoNumero;
} else if (segundoNumero > teceiroNumero && teceiroNumero > primeiroNumero) {

    resultado = segundoNumero;
} else if (teceiroNumero > segundoNumero && segundoNumero > primeiroNumero) {

    resultado = teceiroNumero;
} else if ( teceiroNumero > primeiroNumero && primeiroNumero > segundoNumero) {

    resultado = teceiroNumero;
}

console.log(resultado);*/

// Atividade 4

/*
const  numero = 0;
let resultado;

if (numero > 0) {

    console.log("O numero é Positivo!");


} else if (numero === 0) {

    console.log("Esse número é igual á 0");
}

else {

    console.log( "Esse numero é Negativo");
}*/


// Atividade 5

/*
const primeiroAnguloTriangulo= 600;

const segundoAnguloTriangulo= 60;

const terceiroAnguloTriangulo = 60;


let anguloPositivo = primeiroAnguloTriangulo > 0 && segundoAnguloTriangulo > 0 && terceiroAnguloTriangulo > 0;
let anguloNegativo = primeiroAnguloTriangulo < 0 && segundoAnguloTriangulo < 0 && terceiroAnguloTriangulo < 0;

let somatoriaDosAngulo = primeiroAnguloTriangulo + segundoAnguloTriangulo + terceiroAnguloTriangulo;

if(anguloPositivo) {

    if (somatoriaDosAngulo === 180) {

        console.log(true);
    } else{

        console.log(false);
    };

} else {

    console.log("Erro: ângulo invalidp");
}
*/




// Atividade 6

/*
const chessPiece = 'rei';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}*/


// Atividade 7


/*let nota = 80;


if ( nota < 0 || nota > 100) {

    console.log("Erro! faça que o progrma está pedindo");
    
} else if (nota >= 0 || nota <= 100) {

    switch (nota) {

        case 90:
            console.log("A");
            break;
        case 80:
            console.log("B");
            break;
        case 70: 
            console.log("C");
            break;
        case 60: 
            console.log("D");
            break;
        case 50:
            console.log("E");
            break

        default:
            console.log("F")
            break;
    }
}
*/


// ATIVIDADE 8

/*
const numero1 = 1;

const numero2 = 3;

const numero3 = 1;


if (numero1 %2 === 0 || numero2 %2 === 0 || numero3 %2 === 0) {

    console.log(true);
    
} else{

    console.log(false);
}*/



// ATIVIDADE 9


/*
const numero1 = 2;

const numero2 = 2;

const numero3 = 4;


if (numero1 %2 !== 0 || numero2 %2 !== 0 || numero3 %2 !== 0) {

    console.log(true);
    
} else{

    console.log(false);
}*/


/*
// ATIVIDADE 10

const custoProd = 1;

const valorVend = 3;

if (custoProd >= 0 && valorVend >= 0) {
    const totalcustoProd = custoProd * 1.2;
    const totalProfit = (valorVend - totalcustoProd) * 1000;
    console.log(totalProfit);
  } else {
    console.log("Error, os valores não podem ser negativos");
}*/



/*
// ATIVIDADE 11

let liquataINSS;

let liquataIRF;

let salarioBruto = 3000;

if (salarioBruto <= 1556.96) {

    liquataINSS = salarioBruto * 0.08;
    
} else if (salarioBruto <= 2594.92) {

    liquataINSS = salarioBruto * 0.09;

} else if (salarioBruto <= 5189.82) {

    
    liquataINSS = salarioBruto * 0.11; 
} else if (salarioBruto > 5189.82) {
    
    liquataINSS = 570.88;
}

let baseSalario = salarioBruto - liquataINSS;


if (baseSalario <= 1903.98) {

    liquataIRF = 0;

} else if (baseSalario <= 2826.65) {

    liquataIRF = (baseSalario * 0.075) - 142.80;

} else if (baseSalario <= 3751.05) {

    liquataIRF = (baseSalario * 0.15) - 354.80;

} else if (baseSalario <= 4664.68) {

    liquataIRF = (baseSalario * 0.225) - 636.13;

} else if ( baseSalario > 4664.68) {
    
    liquataIRF = (baseSalario * 0.275) - 869.36;

}

let salarioLiquido = baseSalario -  liquataIRF; 

console.log("O salario liquido sera de: " + salarioLiquido );
*/

