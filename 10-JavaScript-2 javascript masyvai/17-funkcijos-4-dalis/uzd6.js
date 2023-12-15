Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas, sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus kintamuosius) (pagal 7 pavyzdį). Iškvieskite šią pagrindinę funkciją bent kartą.


// var vienas



const fun321 = () => Math.floor(Math.random() * 100);
const fun322 = (a,b) => '${a} + ${b} = ${a + b}';
const fun323 = (a,b) => '${a} + ${b} = ${a + b}';
const fun324 = (a,b) => '${a} + ${b} = ${a + b}';
const fun325 = () => {
    console.log(fun322(fun321(), fun321()));
    console.log(fun323(fun321(), fun321()));
    console.log(fun324(fun321(), fun321()));
};
fun325();

