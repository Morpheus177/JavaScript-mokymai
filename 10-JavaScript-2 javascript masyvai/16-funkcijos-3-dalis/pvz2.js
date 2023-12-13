function isvedimas(masyvas) {
    console.log('DUOMENYS:', masyvas.join(', '));
}

function skaiciuSuma(skaiciuMasyvas) {
    let suma = skaiciuMasyvas.reduce((sum, sk) => sum + sk);
    console.log('Skaičių suma:', suma);
}

let skaiciai1 = [45, 6, 8, 34, 6, 4, 76];
let skaiciai2 = [23, 4, 56, 78, 90, 23, 45, 7];
let medziai = ['ąžuolas', 'uosis', 'liepa', 'berželis', 'drebulė'];

isvedimas(skaiciai1);
skaiciuSuma(skaiciai1);

isvedimas(skaiciai2);
skaiciuSuma(skaiciai2);

isvedimas(medziai);
let medziuRaidziuKiekiai = medziai.map(medis => medis.length);
isvedimas(medziuRaidziuKiekiai);
// skaiciuSuma(medziai);
skaiciuSuma(medziuRaidziuKiekiai);