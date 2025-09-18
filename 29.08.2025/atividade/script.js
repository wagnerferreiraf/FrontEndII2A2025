const lcond = document.querySelector('#lCond');
const input = document.querySelector('input');
const p = document.querySelector('p');
const prodAdd = document.querySelector('#prodAdd');
const lista = document.querySelectorAll('li');
const prodAComp = document.querySelector('#prodAComp');


lcond.addEventListener('mouseover', () => {
    lcond.style.backgroundColor = 'red';
});
// faça o leite condensado ficar com a cor padrão ao tirar o cursor

lcond.addEventListener('mouseout', () => {
    lcond.style.backgroundColor = '';
});

input.addEventListener('change', () => {
    console.log(input.value);
    p.textContent = "Sua busca: " + input.value;
})

// prodAdd.addEventListener('mousemove' , () => {
//     // console.log('Moveu o mouse!')
//     let r = parseInt(Math.random() * 255);
//     let g = parseInt(Math.random() * 255);
//     let b = parseInt(Math.random() * 255);
//     let cor = `rgb(${r}, ${g}, ${b})`
//     console.log(cor);
//     prodAdd.style.backgroundColor = cor;
// })


lista.forEach((item, i) => { // item são os li
    console.log(i, item)
    item.addEventListener('click', (ev) => {
        console.log(ev);
        // console.log(ev.target.parentElement);
        const li = ev.target;
        const ul = li.parentElement;
        if (ul === prodAComp) {
            prodAdd.appendChild(li);
        } else {
            prodAComp.appendChild(li);
        }
    })
})