let skaiciai = [3, 4, 6, 7, 9, 8, 6, 7, 9, 5];

let lyginiuSuma = 0;
let nelyginiuSuma = 0;

for (let i = 0; i < skaiciai.length; i++) {
    // console.log(skaiciai[i]);
    if (skaiciai[i] % 2 == 0) {
        console.log(skaiciai[i], 'lyginis');
        lyginiuSuma += skaiciai[i];
    } else {
        console.log(skaiciai[i], 'nelyginis');
        nelyginiuSuma += skaiciai[i];
    }
}

console.log('Lyginiu skaiciu suma:', lyginiuSuma);
console.log('Nelyginiu skaiciu suma:', nelyginiuSuma);