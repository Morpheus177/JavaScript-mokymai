
function isvestiZodziusIrIlgius(zodziai) {
    for (let i = 0; i < zodziai.length; i++) {
        const zodis = zodziai[i];
        console.log(`${zodis}: ${zodis.length} simboliai`);
    }
}


const zodziuMasyvas = ["Gyvunas", "Programavimas", "JavaScript", "Funkcija"];
isvestiZodziusIrIlgius(zodziuMasyvas);


function isvestiSkaičiusKvadratusIrDalyba(skaičiai) {
    for (let i = 0; i < skaičiai.length; i++) {
        const skaičius = skaičiai[i];
        const kvadratas = skaičius ** 2;
        const dalybaIsDvieju = kvadratas / 2;
        console.log(`${skaičius}, ${kvadratas}, ${dalybaIsDvieju}`);
    }
}


const pirmasSkaičiųMasyvas = [2, 5, 8, 10];
const antrasSkaičiųMasyvas = [3, 7, 12, 15];

isvestiSkaičiusKvadratusIrDalyba(pirmasSkaičiųMasyvas);
isvestiSkaičiusKvadratusIrDalyba(antrasSkaičiųMasyvas);
