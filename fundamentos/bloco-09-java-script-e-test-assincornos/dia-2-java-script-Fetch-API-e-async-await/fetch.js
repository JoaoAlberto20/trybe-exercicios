// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.value);
//   } catch (error) {
//     console.log(`Algo deu errado :( \n ${error}`);
//   }
// }

// fetchJoke();

const starWarsQuote = () => {
	const url = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';
	  _______(url)
	    .then(response => response.json())
	    .then(data => document.getElementById('quote-container').innerText = data.starWarsQuote)
            .catch(error => console.log(error)
};
