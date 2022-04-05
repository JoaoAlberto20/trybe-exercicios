
// Parte 1 - Game Actions Simulator  

//Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};
  
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
 
const demageDragon = (min, max) => {
    const demage1 = Math.floor(Math.random() * (max  - min + 1) + min);
    return demage1;
};

console.log(demageDragon(15, dragon.strength)); 

const demageWarrior = (min, max) => {
    const demage2 = Math.floor(Math.random() * ((min * max)  - min + 1) + min);
    return demage2; 
};

console.log(demageWarrior(warrior.strength, warrior.weaponDmg));

const demageMage = (min, max) => {
  { 
    manaSpent: 
    damageDealt:
  };  
}


