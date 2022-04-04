/* const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculator = (func) => func(10,5)

console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(mult));
console.log(calculator(div));
 */
// Para fixar 

//1- Crie uma função que retorne a string 'Acordando!!' ;
    const wakeUp = () => `Acordando!!`;
    const breakfast = () => `Bora tomar café!!`;
    const sleep = () => `PArtiu dormir!!`;

    const doingThings = (func) => func();

    console.log(doingThings(sleep));