// alert('labas')

let pslPavadinimas = document.getElementById('pavadinimas');
console.log('puslapio pavadinimo el:', pslPavadinimas);

console.log('pirmas paragrafas:', document.getElementById('pirmas-tekstas'));

let blokas1 = document.getElementById('blokas1');
console.log('blokas 1:', blokas1);

console.log( 'sąrašo elementas:', document.getElementById('saraso-el') );

console.log( 'pirmas sąrašo elementas:', document.querySelector('ul li') );

let pirmasParagrafas = document.querySelector('p');
console.log('paragrafas:', pirmasParagrafas);

let kazkurioSarEl = document.querySelector('#blokas2 ul.antras li');
console.log('kažkurio sąrašo elementas:', kazkurioSarEl);

let visiParagrafai = document.querySelectorAll('p');
console.log('visi paragrafai:', visiParagrafai);

let visiLi = document.querySelectorAll('li');
console.log('visi li elementai:', visiLi);

console.log('visi li el, esantys bloke 2:', document.querySelectorAll('#blokas2 li'));

let straipsniuBlokas = document.getElementById('straipsniai');
console.log('straipsnių blokas:', straipsniuBlokas);

let straipsniai = straipsniuBlokas.querySelectorAll('article');
console.log('straipsnių bloko articles:', straipsniai);

let strAntrastes = straipsniuBlokas.querySelectorAll('h3');
console.log('straipsnių bloko antrastes:', strAntrastes);

let antrasStr = document.getElementById('antras-str');
console.log('antras straipsnis:', antrasStr);

console.log('prieš antrą straipsnį:', antrasStr.previousElementSibling);

console.log('už antro straipsnio:', antrasStr.nextElementSibling);

console.log('antro straipsnio tėvinis:', antrasStr.parentElement);

console.log('antro straipsnio tėvinio tėvinis:', antrasStr.parentElement.parentElement);

let pirmasStr = document.getElementById('pirmas-str');
console.log('pirmas straipsnis:', pirmasStr);

let treciasStr = pirmasStr.nextElementSibling.nextElementSibling;
console.log('trečias straipsnis:', treciasStr);

let paragrafasIsStr = document.getElementById('pirmas-str')
    .nextElementSibling
    .querySelector('p');
console.log('paragrafas iš antro straipsnio:', paragrafasIsStr);