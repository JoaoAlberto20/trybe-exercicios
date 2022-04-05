// Crie uma função que receba uma frase e retorne qual a maior palavra.

// Function Normal
function logestWord  (string) {
  let  word = string.split(' ');
  let maxLength = 0;
  let result = ''; 

  for(const index of word) {
    if  (index.length > maxLength) {
        maxLength = index.length;
        result = index; 
    }
  }
  return result; 
}
console.log(logestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// readequando function para arrow function 
const logestWord2 = (string) => {
    let array = string.split(' ');
    let maxLength = 0;
    let result = '';
    for(const word of array) {
      word.length > maxLength ? result = word.length : false;  
    }
    return result;
}
console.log(logestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));