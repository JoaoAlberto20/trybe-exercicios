const sum = (number1, number2) => {
    return number1 + number2;
};

console.log(sum(1, 2));

const sayHello = () =>{
    return `Hello trybers`;
};

const printGreeting = (callback) => {
  console.log(callback());
}

printGreeting(sayHello);


const sumFixAmount =  (amount) => {
  return (numbers) => amount + numbers;
};

const initialSum = sumFixAmount(6);
console.log(initialSum(6));
