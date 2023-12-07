// let pirmoPaz1 = 8;
// let pirmoPaz2 = 9;
// let pirmoPaz3 = 7;
let pirmoPazymiai = [8, 9, 7, 7, 8, 10, 9, 10, 9];

// let antroPaz1 = 10;
// let antroPaz2 = 8;
// let antroPaz3 = 9;
// let antroPaz4 = 7;
let antroPazymiai = [10, 8, 9, 7, 4, 9, 10, 8, 7, 10];

// let pirmoVidurkis = (pirmoPaz1 + pirmoPaz2 + pirmoPaz3) / 3;
let pirmoVidurkis = pirmoPazymiai.reduce((suma, skaicius) => suma += skaicius) / pirmoPazymiai.length;
// let antroVidurkis = (antroPaz1 + antroPaz2 + antroPaz3 + antroPaz4) / 4;
let antroVidurkis = antroPazymiai.reduce((suma, skaicius) => suma += skaicius) / antroPazymiai.length;

if (pirmoVidurkis > antroVidurkis) {
    console.log('pirmas studentas turi geresni vidurki');
} else if (antroVidurkis > pirmoVidurkis) {
    console.log('antras studentas turi geresni vidurki');
} else {
    console.log('abieju studentu vidurkiai vienodi');
}
