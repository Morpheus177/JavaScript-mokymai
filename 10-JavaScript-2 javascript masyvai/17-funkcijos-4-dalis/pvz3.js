function autoAmzius(metai) {
    let dabarMetai = new Date().getFullYear();
    let amzius = dabarMetai - metai;
    return amzius;
}

function arAutoSenas(autoAmzius, amziausRiba) {
    if (autoAmzius < amziausRiba) {
        return 'ne';
    } else {
        return 'taip';
    }
}

function isvedimas(autoObj) {
    let amzius = autoAmzius(autoObj.metai);
    let arSenas = arAutoSenas(amzius, 10);
    console.log(`
        Automobilis: ${autoObj.marke} ${autoObj.modelis}
        Nuvaziavo: ${autoObj.rida} km
        Pagamintas: ${autoObj.metai} m.
        Auto amzius: ${amzius} m.
        Ar senas: ${arSenas}
        Ar senas: ${arAutoSenas(amzius, 10)}
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