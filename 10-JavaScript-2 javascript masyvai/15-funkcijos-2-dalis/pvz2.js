function vidurkis(masyvas) {
    let suma = 0;

    for (const sk of masyvas) {
        suma += sk;
    }

    let vid = suma / masyvas.length;

    console.log('masyvo vidurkis', vid);
}

let skaiciai1 = [1,2,4];
let skaiciai2 = [5,6,7];
let skaiciai3 = [5,6,7,8,9];
let skaiciai4 = [4,5];

vidurkis(skaiciai1);
vidurkis(skaiciai2);
vidurkis(skaiciai3);
vidurkis(skaiciai4);