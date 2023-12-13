let knygos = [
    { pavadinimas: 'Haris Poteris', puslapiai: 300 },
    { pavadinimas: 'Lietuvos istorija', puslapiai: 240 },
    { pavadinimas: 'Istorijos Titanai', puslapiai: 415 },
];

console.log(knygos);
console.log(knygos[1]);
console.log(knygos[1].pavadinimas);

for (const knyga of knygos) {
    // console.log(knyga);
    console.log(knyga.pavadinimas, 'puslapiu yra', knyga.puslapiai);
}