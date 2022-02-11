// 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

    const tag =  document.getElementsByTagName('body')[0];
    let TagH1 = document.createElement("h1");
    TagH1.innerHTML = "Exercício 5.2 - JavaScript DOM ";
    tag.appendChild(TagH1);
    console.log(TagH1);

// 2 Adicione a tag main com a classe main-content como filho da tag body ;

    const tag1 = document.getElementsByTagName("body")[0];
    let tagMain = document.createElement("main");
    tagMain.className = "main-content";
    tag1.appendChild(tagMain);
    console.log(tagMain);

// 3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

    let tagSectionFilhoDaMain1 = document.createElement("section");
    tagSectionFilhoDaMain1.className = "center-content";
    tagMain.appendChild(tagSectionFilhoDaMain1)
    console.log(tagSectionFilhoDaMain1);

// 4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

    let tagParagrafoFilhoDaSection1 = document.createElement("p");
    tagParagrafoFilhoDaSection1.innerHTML = "texto teste"
    tagSectionFilhoDaMain1.appendChild(tagParagrafoFilhoDaSection1);
    console.log(tagParagrafoFilhoDaSection1);

// 5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

    let tagSectionFilhoDaMain2 = document.createElement('section');
    tagSectionFilhoDaMain2.className = 'left-content';
    tagMain.appendChild(tagSectionFilhoDaMain2);
    console.log(tagSectionFilhoDaMain2);


// 6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

    let tagSectionFilhoDaMain3 = document.createElement("section");
    tagSectionFilhoDaMain3.className = "right-content";
    tagMain.appendChild(tagSectionFilhoDaMain3);
    console.log(tagSectionFilhoDaMain3);

// 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image .
// Esse elemento deve ser filho do section criado no passo 5;

    let imgFilhoDaSection2 = document.createElement("img");
    imgFilhoDaSection2.src = " https://picsum.photos/200";
    imgFilhoDaSection2.className = "small-image"
    tagSectionFilhoDaMain2.appendChild(imgFilhoDaSection2);
    console.log(imgFilhoDaSection2);
    
// 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , 
//dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
    
    let ulFilhoDaSection3 = document.createElement('ul');
    tagSectionFilhoDaMain3.appendChild(ulFilhoDaSection3);
    console.log(ulFilhoDaSection3);

    let arryNumbrs = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seix', 'Sete', 'Oito', 'Nove', 'Dez'];

    for( let i = 0; i < arryNumbrs.length; i += 1) {

        let lista = arryNumbrs[i];
        let listaUl = document.createElement("li");
        listaUl.innerHTML = lista;
        ulFilhoDaSection3.appendChild(listaUl);
        console.log(listaUl);
    }

// 9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for( let i = 1; i <= 3; i += 1) {

    let TresTagH3FilhodaMain = document.createElement("h3");
    TresTagH3FilhodaMain.innerHTML = "TAG H3";
    tagMain.appendChild(TresTagH3FilhodaMain);
    TresTagH3FilhodaMain.className = "description"; // 2 Adicione a classe description nas 3 tags h3 criadas;
    console.log(TresTagH3FilhodaMain);
}


// Segunda Etapa

// 1 Adicione a classe title na tag h1 criada;

    TagH1.className = "title";

// 3 Remova a section criado no passo 5 (aquele que possui a classe left-content ). 
// Utilize a função .removeChild() ;

    tagMain.removeChild(tagSectionFilhoDaMain2);


// 4 Centralize a section criado no passo 6 (aquele que possui a classe right-content ).
// Dica: para centralizar, basta configurar o margin-right: auto da section ;

    tagSectionFilhoDaMain3.style.marginRight = "auto";
  
// 5 Troque a cor de fundo do elemento pai da section criada no passo 3 
// (aquela que possui a classe center-content ) para a cor verde;
    
    tagSectionFilhoDaMain1.style.background = 'green'; 

// 6 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

    ulFilhoDaSection3.lastChild.remove();
    ulFilhoDaSection3.lastChild.remove();

  



