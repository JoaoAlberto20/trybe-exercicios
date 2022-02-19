function createDaysOfTheWeek() {

  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


// EXERCÍCIOS 
//1-   O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
//     Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". 
//     Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

//1.2- Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

//1.3- Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

//1.4- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; 

  let ulDays = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index++) {
    
      const list = dezDaysList[index];
      const criaLi = document.createElement('li');
      criaLi.innerHTML = list;
      ulDays.appendChild(criaLi);

    if (list === 24 || list === 31) {

      criaLi.className = 'day holiday';
      criaLi.innerHTML = list;

    } else if( list === 4 || list === 11 || list === 18) {

      criaLi.className = 'day friday';
      criaLi.innerHTML = list;

    } else if (list === 25) {

      criaLi.className = 'day holiday friday';
      criaLi.innerHTML = list;

    } else {

      criaLi.className = 'day';
      criaLi.innerHTML = list;
        
    }
  }

//2-    Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

//2.1-  Adicione a este botão a ID "btn-holiday" .

//2.2-  Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

  function StringFeriado(string) {

    const buttonsContainer = document.getElementsByClassName('buttons-container')[0]; // chamei a div que esta contendo a classe buttons-container
    let buttonsFilho = document.createElement('button'); // criei um botão
    buttonsFilho.id = "btn-holiday"; // Adicionei um id
    buttonsFilho.innerHTML = string; // adicionei um nome para o botão
    buttonsContainer.appendChild(buttonsFilho); // Tornei a tag que foi criado buttons como filho da div com classe buttons-container. 

  }

  StringFeriado('Feriados');

  //3- Implemente uma função que adicione ao botão "Feriados" um evento de "click" 
  //   que muda a cor de fundo dos dias que possuem a classe "holiday" .
  
//3.1- É interessante que este botão possua também a lógica inversa. 
//     Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  
  function displayHolidays() {

    let getHolidaysButton = document.getElementById('btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')

    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'blue';

    getHolidaysButton.addEventListener('click', function() {

      for (let index = 0; index < getHolidays.length; index += 1) {

        if (getHolidays[index].style.backgroundColor === setNewColor) {

          getHolidays[index].style.backgroundColor = backgroundColor;

        } else {

          getHolidays[index].style.backgroundColor = setNewColor;

        }
      }
    })
  };

  displayHolidays();



//4-  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
//4.2-Adicione a este botão o ID "btn-friday" .
//4.3-Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

  function StringFriday(string) {

    
    const buttonsContainer = document.getElementsByClassName('buttons-container')[0];
    let buttonsFilho = document.createElement('button');
    buttonsFilho.id = "btn-friday"; 
    buttonsFilho.innerHTML = string;
    buttonsContainer.appendChild(buttonsFilho);

  }

  StringFriday('Sexta-Feira');



//5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//5.1-É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

  function clickButtonsFriday() {

    let getFridayButtons = document.getElementById('btn-friday');
    let getFriday = document.querySelectorAll('.friday');
    let FridayString = 'Sextou!';
    let arrayNumbers = [4,11,18,25]

    getFridayButtons.addEventListener('click', function(){

      for (let index = 0; index < getFriday.length; index += 1) {

        let elemento = getFriday[index];

        if( elemento.innerHTML !== FridayString) {

          getFriday[index].innerHTML = FridayString;

        } else {

          getFriday[index].innerHTML = arrayNumbers[index];

        } 
      }
    })
  }

  clickButtonsFriday();

//6- Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, 
//   o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
  
  function mauseOver(){

    let mauseSobre = document.querySelector('#days');


    mauseSobre.addEventListener("mouseover", function(event) {

      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';

    })
  }

  function mauseOut(){

      let mauseSai = document.querySelector('#days') ;

      mauseSai.addEventListener('mouseout', function(event) {

        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
      })


  }

  mauseOver();
  mauseOut();

//7-   Implemente uma função que adiciona uma tarefa personalizada ao calendário.A função deve receber como parâmetro a string com o nome da tarefa 
//     (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//7.1- O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .


  function tarefaAreceber(stringAreceber) {

    const myTAsks = document.querySelector('.my-tasks');
    let TarefaAtribuida = document.createElement('span');
    TarefaAtribuida.innerHTML = stringAreceber;
    myTAsks.appendChild(TarefaAtribuida);

  }

tarefaAreceber('cozinhar');

//8-    Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
//      Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//8.1-  O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//8.1-  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function lengendaCor(cor) {

  const myTAsks = document.querySelector('.my-tasks');
  let criandoDiv = document.createElement('div');
  criandoDiv.className = 'task';
  criandoDiv.style.backgroundColor = cor;
  myTAsks.appendChild(criandoDiv);


}

lengendaCor('yellow');



//9     Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa,
//      atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
//9.1-  Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function taskSeletor() {
  
  let classeTask = document.querySelector('.task');

  classeTask.addEventListener('click', function (event) {

    let taskSelected = document.getElementsByClassName('task selected');

    if(taskSelected.length === 0){

      event.target.className = 'task selected';

    } else {

      event.target.className = 'task';
    }

  })
}

taskSeletor();


//10-   Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, 
//      atribua a este dia a cor da legenda da sua tarefa selecionada.
//10.1- Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function eventoClickDia () {

  let taskSelected = document.getElementsByClassName('task selected');
  console.log(taskSelected);
  let clicarEmUnDia = document.querySelector('#days');
  let task = document.querySelector('.task');
  let taskColor = task.style.backgroundColor;

  clicarEmUnDia.addEventListener('click', function(event) {

    let mudancaDeCor = event.target.style.Color;

    if(taskSelected.length > 0 && mudancaDeCor !== taskColor) {

      let cor = taskSelected[0].style.backgroundColor;
      event.target.style.color = cor;

    } else if (mudancaDeCor === taskColor && taskSelected.length !== 0 ) {

      event.target.style.color = 'rgb(119,119,119)';

    }
  })
}

eventoClickDia();











