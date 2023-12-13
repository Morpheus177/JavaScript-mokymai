let parduotuve = {
    pavadinimas: 'Maxima',
    adresas: 'Gatviu g. 49-2',
    darbuotojuSk: 87
};

console.log('pavadinimas:', parduotuve.pavadinimas);
console.log('adresas:', parduotuve.adresas);
console.log('darbuotoju skaicius:', parduotuve.darbuotojuSk);

for (const raktas in parduotuve) {
    console.log('raktas is objekto:', raktas);
}

for (const raktas in parduotuve) {
    console.log(raktas, 'rakte yra', parduotuve[raktas]);
}

// let pazymiai = [10, 9, 8, 10, 9];

let pazymiai = {
    tomasTomauskas: 10,
    PaulinaPaulinyte: 9,
    IgnasIgnauskas: 10,
    GintareGintaryte: 10,
};

for (const stud in pazymiai) {
    console.log('studento', stud, 'metinis', pazymiai[stud]);
}

// let prekiuLikuciai = [90, 34, 8, 2, 10, 46];

let prekiuLikuciai = {
    piestuku: 90,
    flomasteriu: 34,
    obuoliu: 8,
    tortu: 2,
    bananai: 10,
    zurnalai: 46
};

let suma = 0;

for (const preke in prekiuLikuciai) {
    suma = suma + prekiuLikuciai[preke];
}

console.log('visu prekiu likuciu suma yra', suma);

let informacija = 'koks nors tekstas';
let informacija2 = 6556;

console.log(typeof informacija);
console.log(typeof informacija2);

console.log(typeof parduotuve.darbuotojuSk);
console.log(typeof parduotuve['darbuotojuSk']);