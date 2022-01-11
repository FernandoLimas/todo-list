//================================================================TODO LIST===========================================================
let input =  document.getElementById('input');
let btnAD = document.getElementById('btnAd');
let ullista =  document.getElementById('lista');
let btnDEL = document.getElementById('btnDel')
//Eventos
btnAD.addEventListener('click', addlist);

// Função
    function addlist(event) {
      event.preventDefault()
      if(input.value !== ''){
        
        let lilista = document.createElement('li');
        lilista.innerHTML = input.value;
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        // checkbox.id='checkDom';
        lilista.appendChild(checkbox);
        ullista.appendChild(lilista);
        input.value = '';
        input.focus();
      }
}
