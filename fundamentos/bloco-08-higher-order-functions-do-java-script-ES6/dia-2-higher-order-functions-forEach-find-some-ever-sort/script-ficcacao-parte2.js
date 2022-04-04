const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliue2 = (elemnt) => {
  console.log(`${elemnt} * 2: ${elemnt * 2}`);
};

numbers.forEach(multipliue2);

////////////////////////////////////////////////////////////////////////////

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToupperCase = (name, index) => {
    names[index] = name.toUpperCase();
}

names.forEach(convertToupperCase);
console.log(names)

// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
  
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

