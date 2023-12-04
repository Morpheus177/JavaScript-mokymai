let blokas1 = document.getElementById('blokas1');
// console.dir(blokas1);
// console.log(blokas1.classList);

blokas1.classList.add('trecia');

blokas1.classList.remove('antra');

let blokas2Par = document.querySelector('#blokas2 p');

document.getElementById('norm-tekstas').addEventListener('click', () => {
    // console.log('iprastas tekstas')
    blokas2Par.classList.remove('didesnis-tekstas');
});

document.getElementById('didesn-tekstas').addEventListener('click', () => {
    // console.log('didesnis tekstas')
    blokas2Par.classList.add('didesnis-tekstas');
});

document.getElementById('iprasta-spalva').addEventListener('click', () => {
    blokas2Par.classList.remove('raudona-teksto-spalva');
});

document.getElementById('raudona-spalva').addEventListener('click', () => {
    blokas2Par.classList.add('raudona-teksto-spalva');
});

let blokas3Mygtukas = document.querySelector('#blokas3 button');
let blokas3Par = blokas3Mygtukas.nextElementSibling;

// console.log(blokas3Mygtukas, blokas3Par);

blokas3Mygtukas.addEventListener('click', () => {
    // blokas3Par.classList.toggle('slepti');

    if (blokas3Par.classList.contains('slepti')) {
        blokas3Par.classList.remove('slepti');
        blokas3Mygtukas.textContent = 'Slėpti';
    } else {
        blokas3Par.classList.add('slepti');
        blokas3Mygtukas.textContent = 'Rodyti';
    }
});

document.querySelector('.dropdown button').addEventListener('click', event => {
    // console.log('veikia');
    // event.target -> mygtukas kurį kątik spaudėme
    // nextElementSibling -> ul, esantis iškart už mygtuko
    // classList -> tas ul gali turėti klasių
    // toggle -> įjungiam/išjungiam klasę rodyti
    event.target.nextElementSibling.classList.toggle('rodyti');
});

let rangeInput = document.querySelector('#teksto-dydzio-keitimas input');
let tekstas = document.querySelector('#teksto-dydzio-keitimas p');

rangeInput.addEventListener('input', event => {
    let dydis = rangeInput.value + 'px';
    // console.log(dydis);
    tekstas.style.fontSize = dydis;
});