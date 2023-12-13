let studentai = [
    { vardas: 'Povilas', pazymiai: [10, 10, 9] },
    { vardas: 'Ugne', pazymiai: [9, 10, 9, 10] },
    { vardas: 'Gintaras', pazymiai: [8, 9, 10, 7, 10, 9] },
    { vardas: 'Inga', pazymiai: [8, 7, 8, 9] },
];

for (const studentas of studentai) {
    // console.log(studentas);
    // console.log(studentas.vardas);
    // console.log(studentas.pazymiai);
    console.log('Studentas(-e):', studentas.vardas);

    // 1 metodas

    let suma = 0;
    for (const pazymys of studentas.pazymiai) {
        suma += pazymys;
    }
    let vidurkis = (suma / studentas.pazymiai.length).toFixed(2);
    console.log('Vidurkis:', vidurkis, '\n');

    // 2 metodas

    // let suma = studentas.pazymiai.reduce((sum, paz) => sum + paz);
    // let kiekis = studentas.pazymiai.length;
    // let vidurkis = (suma / kiekis).toFixed(2);

    // // let vidurkis = (studentas.pazymiai.reduce((sum, paz) => sum + paz) / studentas.pazymiai.length).toFixed(2);
    // console.log('Vidurkis:', vidurkis, '\n');

}

// studentai[0].pazymiai