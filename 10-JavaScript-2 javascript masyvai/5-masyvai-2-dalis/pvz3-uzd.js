// Susikurkite masyvą, kuriame būtų saugomi
// mokymų programos temų pavadinimai (pvz:
// kintamieji, išvedimas, aritmetiniai veiksmai).
// Išveskite kiekvieną temą atskiroje eilutėje,
// prieš temos pavadinimą nurodant kuri tai tema.
// pvz:
// 1-a tema: kintamieji
// 2-a tema: išvedimas
// 3-a tema: aritmetiniai veiksmai
// ...

let temos = [
    'kintamieji',
    'išvedimas',
    'aritmetiniai veiksmai',
    'patikrinimo sąlyga if',
    'patikrinimo sąlyga switch',
    'ciklas for',
    'ciklas while',
    'masyvai',
];

for (let i = 0; i < temos.length; i++) {
    console.log(`${i+1}-a tema: ${temos[i]}`);
}