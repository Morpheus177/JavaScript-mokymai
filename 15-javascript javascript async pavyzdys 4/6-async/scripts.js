const getSchools = async () => {
    let atsakymas = await fetch('mokyklos.json');

    // console.log(atsakymas);

    if (atsakymas.status !== 200) {
        throw new Error('Failas nerastas');
    }

    let mokyklos = await atsakymas.json();
    return mokyklos;
}

// async function getSchools() {
// }

console.log(1);

getSchools().then(duomenys => {
    console.log(duomenys);
}).catch(klaida => {
    console.log(klaida);
});

console.log(2);

// let duomenys = getSchools();
