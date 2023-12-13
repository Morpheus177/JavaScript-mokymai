let prekes = [
    { pavadinimas: 'Obuoliai', kaina: 2, kiekis: 100 },
    { pavadinimas: 'Morkos', kaina: 3, kiekis: 80 },
    { pavadinimas: 'Kriauses', kaina: 1, kiekis: 136 },
    { pavadinimas: 'Mandarinai', kaina: 4, kiekis: 65 },
    { pavadinimas: 'Agurkai', kaina: 2, kiekis: 89 },
];

// bendras kiekis - suma - 1 metodas

let bendrasKiekis = 0;

for (const preke of prekes) {
    // console.log(preke.kiekis);
    bendrasKiekis += preke.kiekis;
}

console.log('bendras prekiu kiekis', bendrasKiekis);

// bendras kiekis - suma - 2 metodas

let kiekiai = prekes.map(preke => preke.kiekis);
let bendrasKiekis2 = kiekiai.reduce((sum, el) => sum + el);
// console.log(kiekiai);
console.log('bendras prekiu kiekis', bendrasKiekis2);

// bendras kiekis - suma - 3 metodas

let bendrasKiekis3 = prekes.reduce((sum, preke) => sum + preke.kiekis, 0);
console.log('bendras prekiu kiekis', bendrasKiekis3);

// kainos vidurkis - 1 metodas

let kainuSuma = 0;

for (const preke of prekes) {
    // console.log(preke.kaina);
    kainuSuma += preke.kaina;
}

let kainosVidurkis = kainuSuma / prekes.length;

console.log('kainos vidurkis:', kainosVidurkis);

// kainos vidurkis - 2 metodas

let kainos = prekes.map(preke => preke.kaina);
let kainuSuma2 = kainos.reduce((sum, kaina) => sum + kaina);
let kainosVidurkis2 = kainuSuma2 / prekes.length;
console.log('kainos vidurkis:', kainosVidurkis2);

// kainos vidurkis - 3 metodas

let kainosVidurkis3 = prekes.reduce((sum, preke) => sum + preke.kaina, 0) / prekes.length;
console.log('kainos vidurkis:', kainosVidurkis3);