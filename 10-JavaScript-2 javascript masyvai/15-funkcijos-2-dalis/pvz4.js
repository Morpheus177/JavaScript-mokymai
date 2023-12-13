function isvedimas(marke, modelis, rida, metai) {
    console.log(`Automobilis ${marke} ${modelis} (${metai} m.) nuvaziavo ${rida} km.`);
    let amzius = new Date().getFullYear() - metai;
    console.log('Vidutiniskai per metus nuvaziuoja:', Math.round(rida / amzius), 'km');
}

isvedimas('Audi', 'A4', 45205, 2010);
isvedimas('Audi', 'A4', 2015, 36474);

let mark = 'Volvo';
let mod = 'S60';
let met = 2015;
let rid = 103570;

isvedimas(mark, mod, rid, met);