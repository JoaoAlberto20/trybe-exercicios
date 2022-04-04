// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const poitsAnsersRight = (rightAnswers, studentAnswers) => {
 if (rightAnswers === studentAnswers) {
   return 1;
 } else if (studentAnswers === 'N.A') {
   return 0;
 } else if (rightAnswers !== studentAnswers) {
   return -0.5;
 }
};

const HOF = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;  
  for(const index in rightAnswers) {
    const reposta = callback(rightAnswers[index], studentAnswers[index]);
    counter += reposta;
  }
  return `O Total de resposta Corretas são: ${counter}`;
};
console.log(HOF(RIGHT_ANSWERS, STUDENT_ANSWERS, poitsAnsersRight)); 
