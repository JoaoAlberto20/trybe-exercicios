// Utiizando o Throw, try e catch
    /* const veryfyIsNumber = (value1, value2) => {
        if (typeof value1 !== 'number' || typeof value2 !== 'number') {
            throw new Error('Os Valores devem ser numéricos');
        }
    };

    const sum = (value1, value2) => {
        try {
            veryfyIsNumber(value1, value2);
            return value1 + value2;
        } 
        catch (error) {
            throw error.message; 
        }
    };
    console.log( sum(2, '3')); */

/////////////////////////////////////////////////////////////

// Utilizando Object.keys para acesar os array do objeto.

    /* const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
    };  
    console.log(Object.keys(coolestTvShow));

    // Utilizando Object.keys para acesar os array do objeto.

    /* const student1 = {
        Html: 'Muito Bom',
        Css: 'Bom',
        JavaScript: 'Ótimo',
        SoftSkills: 'Ótimo',
    };
    
    const student2 = {
        Html: 'Bom',
        Css: 'Ótimo',
        JavaScript: 'Ruim',
        SoftSkills: 'Ótimo',
        Git: 'Bom', // chave adicionada
    };

    const mostrarHbilidades = (student) => {
        const arraysSkills = Object.keys(student);
        for (const index of arraysSkills) {
        console.log(`${index}, Nível:${student[index]}`); 
        } 
    };

    console.log('Estudante 1')
    mostrarHbilidades(student1);

    console.log('Estudante 2');
    mostrarHbilidades(student2); */
/////////////////////////////////////////////////////////////

// Utilizando o Obeject.values para acessar cada elemntos do arrays dentro do objeto.

    /*
    const coolestTvShow = { 
        name: "BoJack Horseman",
        genre: "adult animation",
        createdBy: "Raphael Bob-Waksberg",
        favoriteCharacter: "Princess Carolyn",
        quote: "Princess Carolyn always lands on her feet.",
        seasons: 6,
    };

    // Acessando os elemntos dos array que estão no objeto.
    const lista = (value1) => {
        for (let index in value1) {
            console.log(value1[index]);
        }
    }
    lista(coolestTvShow); 

    // Refatorando o código para fazer o mesmo que no código de cima.
    const lista2 = (value1) => {return Object.values(value1)};
    console.log(lista2(coolestTvShow));*/


/*     const student = {
        Html: 'Muito Bom',
        Css: 'Bom',
        JavaScript: 'Ótimo',
        SoftSkill: 'Ótimo',
    };

    const skillsWithObjectValues = (value) => {return Object.values(value)};
    console.log(skillsWithObjectValues(student)); */

/////////////////////////////////////////////////////////////

// Utilizando o Object.entries para acessar array e o valor de um objeto.

    const coolestTvShow = {
        name: "BoJack Horseman",
        genre: "adult animation",
        createdBy: "Raphael Bob-Waksberg",
        favoriteCharacter: "Princess Carolyn",
        quote: "Princess Carolyn always lands on her feet.",
        seasons: 6,
    };

    const listarArrauValue = (value) => {return Object.entries(value)}
    console.log(listarArrauValue(coolestTvShow));

    const países = {
        França: 'Paris',
        Brasil: 'Brasília',
        Espanha: 'Madrid',
        Portugal: 'Lisboa',
    };
      const pairKeyValue = Object.entries(países);
      console.log(pairKeyValue);


/////////////////////////////////////////////////////////////


