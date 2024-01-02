let eggOrdersNeeded = 100; // Konstanta, kiek viščių kiaušinių reikia užsakyti šiandien
let eggOrdersInput = 0; // Kintamasis be būsenos

// Funkcija atnaujinti kintamąjį su būsena
function updateEggOrders() {
    eggOrdersInput = parseInt(document.getElementById("eggOrders").value) || 0;
}

// Funkcija patikrinti užsakymus
function checkOrders() {
    updateEggOrders();

    if (eggOrdersInput >= eggOrdersNeeded) {
        let surplus = eggOrdersInput - eggOrdersNeeded;
        document.getElementById("result").innerHTML = `Viskas gerai! Turite perteklių: ${surplus} kiaušiniai.`;
    } else {
        let shortage = eggOrdersNeeded - eggOrdersInput;
        document.getElementById("result").innerHTML = `Nespėsite! Trūksta: ${shortage} kiaušiniai.`;
    }
}
