// alert('labas')

document.getElementById('siurprizas').addEventListener('click', event => {
    alert('Laimėjote automobilį!');
});

document.querySelector('#tekstas button').addEventListener('click', event => {
    // document.querySelector('#tekstas p').textContent = 'Jėga, paspaudei :)))';
    event.target.nextElementSibling.textContent = 'Jėga, paspaudei :)))';
});

let mygtukai = document.querySelectorAll('#kuris button');
console.log(mygtukai);

mygtukai.forEach(mygtukas => {
    // console.log(mygtukas);
    mygtukas.addEventListener('click', event => {
        // console.dir(event.target);
        // console.log(event.target.textContent);
        // console.log(mygtukas.textContent);
        let spanEl = document.querySelector('#kuris p span');
        spanEl.textContent = event.target.textContent;
    });
});

let mygDidinti = document.getElementById('didinti');
let mygMazinti = document.getElementById('mazinti');
let counterEl = document.querySelector('#counteris p strong');

// console.log(mygDidinti, mygMazinti, counterEl);

// console.log({
//     'didinti mygtukas': mygDidinti,
//     'mazinti mygtukas': mygMazinti,
//     'counter strong elementas': counterEl,
// });

mygDidinti.addEventListener('click', () => {
    counterEl.textContent = parseInt(counterEl.textContent) + 1;
});

mygMazinti.addEventListener('click', () => {
    counterEl.textContent = parseInt(counterEl.textContent) - 1;
});

let blokas = document.getElementById('blokas');

blokas.addEventListener('click', () => {
    alert('labuką ;)');
});

blokas.addEventListener('mouseover', () => {
    // console.log('veikia');
    document.getElementById('slaptas').textContent = 'O_O';
});