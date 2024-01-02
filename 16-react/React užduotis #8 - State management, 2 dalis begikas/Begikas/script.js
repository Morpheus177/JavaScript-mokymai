// Kintamieji su būsena
let runner1Time = 0;
let runner2Time = 0;

// Funkcija saugoti laikus
function saveTimes() {
    runner1Time = parseFloat(document.getElementById("runner1").value);
    runner2Time = parseFloat(document.getElementById("runner2").value);
}

// Funkcija palyginti bėgikus
function compareRunners() {
    saveTimes();

    if (runner1Time > 0 && runner2Time > 0) {
        let winner = (runner1Time < runner2Time) ? "Bėgikas 1" : "Bėgikas 2";
        let timeDifference = Math.abs(runner1Time - runner2Time);

        document.getElementById("result").innerHTML = `${winner} buvo greitesnis per ${timeDifference.toFixed(2)} sekundes.`;
    } else {
        document.getElementById("result").innerHTML = "Įveskite abiejų bėgikų laikus.";
    }
}
