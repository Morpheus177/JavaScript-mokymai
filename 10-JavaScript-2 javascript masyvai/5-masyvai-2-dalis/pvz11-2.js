let skaiciai = [3, 4, 6, 3, 7, 1, 2, 5, 9];

let lyginiuSuma = 0;
let lyginiuKiekis = 0;

for (let i = 0; i < skaiciai.length; i++) {
    // if (skaiciai[i] % 2 == 0 && skaiciai[i] != 0) {
    if (skaiciai[i] % 2 == 0) {
        // console.log(skaiciai[i]);
        // lyginiuSuma += skaiciai[i];
        lyginiuSuma = lyginiuSuma + skaiciai[i];
        // lyginiuKiekis++;
        // lyginiuKiekis = lyginiuKiekis + 1;
        lyginiuKiekis += 1;
    }
}

let vidurkis = lyginiuSuma / lyginiuKiekis;

console.log('lyginiu skaiciu vidurkis:', vidurkis);
