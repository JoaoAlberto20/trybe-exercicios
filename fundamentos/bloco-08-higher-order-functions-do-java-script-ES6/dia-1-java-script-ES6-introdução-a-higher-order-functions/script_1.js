// 1 -Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const NomeCompletoEmail = (nome) => {
    const nameCompleto = nome.toLowerCase().split(" ").join("_");
    return {nome, email: `${nameCompleto}@trybe.com`};  
};

console.log(NomeCompletoEmail('Joao Alberto'))


const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'),  
    id2: callBack('Luiza Drumond'), 
    id3: callBack('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(NomeCompletoEmail));

