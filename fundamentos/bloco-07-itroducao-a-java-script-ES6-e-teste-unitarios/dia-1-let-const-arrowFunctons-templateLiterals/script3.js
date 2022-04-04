const btn = document.querySelector('#btn');
const pagrafo = document.querySelector('#texto');
let sum = 0;  

btn.addEventListener('click', () => pagrafo.innerHTML = sum += 1);
