function eventoClickEnviar() {
    
  const subimitButton = document.getElementById("submit-btn");
  console.log(subimitButton);

  subimitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = validacao();

    if(validation === false) {
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
    }
  });
}
eventoClickEnviar();

function eventoClickApagar() {
    const clearAreas = document.querySelectorAll('input');
    const textArea = document.querySelector("textarea");
    const clearButton = document.querySelector('#clear-btn');

    clearButton.addEventListener('click', (event) => {
      console.log(clearButton);
      event.preventDefault();
      for(let index = 0; index < clearAreas.length; index += 1) {
        const element = clearAreas[index];
        element.value = '';
        element.checked = false;
      }
      textArea.value = '';
    });
}
eventoClickApagar();

function enableButton() {
    const checkedBox = document.querySelector('#agreement');
    checkedBox.addEventListener('change', () => {
        const enable = document.querySelector("#submit-btn");
        enable.disabled = !checkedBox.checked;
    });
}
enableButton();

function validacao() {

    const lengthNome = document.querySelector('#input-name').value.length;
    const tamanhoName = lengthNome < 10 || lengthNome > 50;
    console.log(tamanhoName)
    
    const lengthEmail = document.querySelector('#input-email').value.length;
    const tamanhoEmail = lengthEmail < 10 || lengthEmail > 40 ;
    console.log(tamanhoEmail)

    const lengthTextArea = document.querySelector('#input-textarea').value.length;;
    const tamanhoTextArea = lengthTextArea > 500;
    console.log(tamanhoTextArea);

    if (tamanhoName || tamanhoEmail  || tamanhoTextArea) {
        return false;
    } else {
        return true;
    }
}









