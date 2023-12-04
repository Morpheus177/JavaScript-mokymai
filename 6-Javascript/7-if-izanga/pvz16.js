let automobilis = 'audi a4';
let rida = 154836;

// 1-as variantas:

// let ridosTipas = rida >= 100000 ? 'aukšta' : 'žema';
// console.log(`${automobilis}-io rida yra ${ridosTipas}, nes sudaro ${rida} km`);

// 2-as variantas:

// if (rida >= 100000) {
//     console.log(`${automobilis}-io rida yra aukšta, nes sudaro ${rida} km`);
// } else {
//     console.log(`${automobilis}-io rida yra žema, nes sudaro ${rida} km`);
// }

// 3-as variantas:

console.log(`${automobilis}-io rida yra ${rida >= 100000 ? 'aukšta' : 'žema'}, nes sudaro ${rida} km`);