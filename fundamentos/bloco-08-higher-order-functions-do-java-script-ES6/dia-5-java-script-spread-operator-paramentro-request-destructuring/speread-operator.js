// Exemplo de spread

// Exemplo 1

// const carros = ['Gol', 'HB20', 'Focus'];
// const motos = ['Biz', 'R1'];

// const veiculos = [...motos, ...carros];
// console.log(veiculos);

//////////////////////////////////////////////////////////////////////////////

// Exemplo 2 
// const conhecimentoTrybe = {
//   softSkills : true,
//   hardSkills: true,
//   trabalho: true,
// };

// const pessoa = {
//   nome: 'Nádia',
//   idade: "28",
//   cidade: 'BH'
// };

// const pessoaTrybe = {
//   ...pessoa,
//   ...conhecimentoTrybe,
//   esporte: 'Corrida',
// };

// console.log(pessoaTrybe)

//////////////////////////////////////////////////////////////////////////////

// EXemplo 3

// const numbers = [1, 2, 3];

// const newArray = [...numbers, 4, 5, 6];
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers); // [ 1, 2, 3 ]

//////////////////////////////////////////////////////////////////////////////

// Exemplo 4 

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];

// console.log(months);

//////////////////////////////////////////////////////////////////////////////

// Exemplo 5 

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

//////////////////////////////////////////////////////////////////////////////

// Exemplo 6

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

//////////////////////////////////////////////////////////////////////////////

// Exemplo 7

// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = { ...people, ...about };
// console.log(customer); 
/* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

//////////////////////////////////////////////////////////////////////////////

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Manga', 'Abacaxi', 'Laranja', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mamão', 'Uva sem semente', 'Quiuí'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));