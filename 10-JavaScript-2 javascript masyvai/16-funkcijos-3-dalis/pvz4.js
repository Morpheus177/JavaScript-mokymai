function duomenuGeneravimas(masyvas, kiekSkaiciu, mazSk, didSk) {
    for (let i = 0; i < kiekSkaiciu; i++) {
        let sk = Math.floor(Math.random() * (didSk - mazSk)) + mazSk;
        masyvas.push(sk);
    }
}

function isvedimas(komentaras, masyvas) {
    console.log(komentaras + ':');
    console.log(masyvas.join(', '));
    console.log();
}

function skaiciuSuma(skaiciuMasyvas) {
    let suma = skaiciuMasyvas.reduce((sum, sk) => sum + sk);
    console.log('Gauta skaičių suma:', suma, '\n');
}

let skaiciai1 = [];
let skaiciai2 = [];
let skaiciai3 = [];

duomenuGeneravimas(skaiciai1, 10, 2, 5);
duomenuGeneravimas(skaiciai2, 3, 100, 102);
duomenuGeneravimas(skaiciai3, 20, 1, 100);

isvedimas('Skaičiai 1', skaiciai1);
skaiciuSuma(skaiciai1);

isvedimas('Skaičiai 2', skaiciai2);
skaiciuSuma(skaiciai2);

isvedimas('Skaičiai 3', skaiciai3);
skaiciuSuma(skaiciai3);