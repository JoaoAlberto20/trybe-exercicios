
const url = 'https://api.coincap.io/v2/assets';

const showCoins = (callBack) => {
  const data = callBack.data;
  console.log(data);
  const objeto = data.filter(({ rank }) => rank <= 10);
  const listCoins = document.querySelector('#list-coins')
  objeto.reduce((acc, element) => {
    const criarlist = document.createElement('li');
    const coins = `${element.id} (${element.symbol}): ${element.priceUsd}`;
    criarlist.innerText = coins;
    listCoins.appendChild(criarlist);
  }, 0);
};

const getCripto = async () => {
  try {
    const response = await fetch(url)
    const objeto = await response.json();
    showCoins(objeto);
  } catch(error) {
    alert(`Algo de errado não está cert!`);
  }
};

getCripto();

