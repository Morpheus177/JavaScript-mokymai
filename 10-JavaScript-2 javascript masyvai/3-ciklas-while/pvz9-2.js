let suma = 0;
let skaicius = 0;

while (suma < 500) {
    skaicius = Math.floor(Math.random() * 100) + 1;
    if (suma + skaicius > 500) {
        console.log('Negaliu prideti, nes virsysiu suma');
        break;
    } else {
        suma += skaicius;
    }
    console.log(skaicius);
}

console.log('\nSuma:', suma);