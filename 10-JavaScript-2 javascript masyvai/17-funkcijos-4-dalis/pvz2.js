function autoAmzius(metai) {
    let dabarMetai = new Date().getFullYear();
    let amzius = dabarMetai - metai;
    return amzius;
}

function isvedimas(autoObj) {
    console.log(`
        Automobilis: ${autoObj.marke} ${autoObj.modelis}
        Nuvaziavo: ${autoObj.rida} km
        Pagamintas: ${autoObj.metai} m.
        Auto amzius: ${autoAmzius(autoObj.metai)} m.
    `);
}

let auto1 = {
    marke: 'audi',
    modelis: 'silke',
    rida: 500000,
    metai: 1975
};

let auto2 = {
    marke: 'audi',
    modelis: 'a4',
    rida: 34658,
    metai: 2018
};

isvedimas(auto1);
isvedimas(auto2);

// function autoAmzius(rida, metai) {
//     let dabarMetai = new Date().getFullYear();
//     let amzius = dabarMetai - metai;
//     let atsakymas = Math.round(rida / amzius);
//     return atsakymas;
//     // return Math.round(rida / new Date().getFullYear());
// }