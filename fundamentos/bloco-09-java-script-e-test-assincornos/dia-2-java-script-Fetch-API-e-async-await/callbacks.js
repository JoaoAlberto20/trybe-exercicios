// const despesas = [
//   {
//     gym: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     phone: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// const renda = 1000;


// const despesaMensal = (renda, despesas, callback) => {

//   const despesaTotal = callback(despesas);
//   const saldoFinal = renda - despesaTotal;

//   console.log(`Balanço do mês:
//     Recebido: R$${renda},00
//     Gasto: R$${despesaTotal},00
//     Saldo: R$${saldoFinal},00 `);
// };

// const somaDespesas = (despesas) => {
//   const custoItem = despesas.map((item) => Object.values(item));
//   const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//   return despesaTotal;
// };

// // acc é a sigla para accumulator (acumulador)
// // curr é a sigla para current (valor atual)
// despesaMensal(renda, despesas, somaDespesas);



// const resultdoFinal = (resultado) => {
//   console.log(resultado)
// };

// const funcSoma = (num1, num2, callback) => {
//   let soma = num1 + num2;
//   callback(soma);
// };

// funcSoma(10, 8, resultdoFinal);

// Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// // Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// getUser(userFullName);


// Exercicio de fixação 1

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"


// Exercicio de fixação 2

const userFullName2 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality2 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    return callback(user);
  }, delay());
  
};

console.log(getUser2(userFullName2)); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
console.log(getUser2(userNationality2)); // deve imprimir "Ivan is Russian" depois de um certo tempo

