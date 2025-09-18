// const paragrafo = window.document.querySelector('#pInicial');
// const lista = document.querySelectorAll('li');
// const link = document.querySelector('a')

// console.log(paragrafo.textContent);
// paragrafo.textContent = 'Novo conteúdo';
// console.log(lista.length);
// console.log(link.getAttribute('href'));

// link.setAttribute('href','https://www.ifro.edu.br');
// link.setAttribute('target', '_blank');

// paragrafo.style.backgroundColor = 'red';

// addEventListener('click', (ev)=>{
//     alert('clicou!');
//     ev.target.style.backgroundColor = 'yellow';
// })

const link = document.querySelector('a');
link.remove();
const body = document.querySelector('body');
const paragrafo = document.createElement('p');
paragrafo.textContent = 'Paragráfo especial';
body.prepend(paragrafo);