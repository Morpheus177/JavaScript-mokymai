function isvedimas(komentaras, masyvas) {
    console.log(komentaras + ':');

    // console.log(masyvas.join(' '));
    for (const elementas of masyvas) {
        console.log('-', elementas);
    }

    console.log();
}

let skaiciai = [2, 3, 5, 6, 7, 8];
let prekes = ['kriauses', 'obuoliai', 'agurkai', 'pomidorai'];
let salys = ['LT', 'LV', 'ES'];
let temperaturos = [28.4, 27.9, 30.02];

isvedimas('Skaičiai', skaiciai);
isvedimas('Prekės parduotuvėje', prekes);
isvedimas('Šalys', salys);
isvedimas('Temperatūros', temperaturos);

// console.log('skaiciai:');

// for (const sk of skaiciai) {
//     console.log('-', sk);
// }

// console.log('prekes:');

// for (const preke of prekes) {
//     console.log('-', preke);
// }