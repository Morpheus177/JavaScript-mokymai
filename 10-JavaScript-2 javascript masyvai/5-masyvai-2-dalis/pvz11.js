let skaiciai = [9, 4, 7, 6, 5, 8];

let suma = 0;

for (let i = 0; i < skaiciai.length; i++) {
    suma = suma + skaiciai[i];
}

let vidurkis = suma / skaiciai.length;

console.log('skaiciai:', skaiciai);
console.log('vidurkis', vidurkis);