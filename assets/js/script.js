//================================================================TODO LIST===========================================================
let input =  document.getElementById('input');
let btnAD = document.getElementById('btnAd');
let ullista =  document.getElementById('lista');
let btnDEL = document.getElementById('btnDel')

//Eventos
btnAD.addEventListener('click', addlist);
btnDEL.addEventListener('click', clearSelect);
ullista.addEventListener('dblclick', checkClick);

// Função
function addlist(event) {
  event.preventDefault()
  if(input.value !== ''){
    
    let lilista = document.createElement('li');
    lilista.innerHTML = input.value;
    lilista.classList = 'listli'
    ullista.appendChild(lilista);
    input.value = '';
    input.focus();
  }
}

function checkClick(value) {
  value.target.classList.toggle('completed');
}

function clearSelect(event) {
  event.preventDefault()
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i += 1) {
    const element = lis[i];
    if (element.classList.contains('completed')) {
      ullista.removeChild(element);
    }
  }
}
    
