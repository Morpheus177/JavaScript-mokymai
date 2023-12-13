
var studentai = [
    {
        vardas: "Jonas",
        pavarde: "Balsys",
        amzius: 20,
        pazymiai: [8, 9, 7, 10],
        studijuPrograma: "Informatika",
        kursas: 2
    },
    {
        vardas: "Ona",
        pavarde: "Petraitiene",
        amzius: 21,
        pazymiai: [7, 8, 6, 9],
        studijuPrograma: "Matematika",
        kursas: 3
    },
    {
        vardas: "Marius",
        pavarde: "Salcius",
        amzius: 22,
        pazymiai: [9, 9, 10, 8],
        studijuPrograma: "Fizika",
        kursas: 4
    }
];


for (var i = 0; i < studentai.length; i++) {
    var studentas = studentai[i];

    
    console.log("Vardas ir pavardė: " + studentas.vardas + " " + studentas.pavarde);
    console.log("Amžius: " + studentas.amzius);
    console.log("Studijų programa: " + studentas.studijuPrograma);
    console.log("Kursas: " + studentas.kursas);

    
    console.log("Pažymiai: " + studentas.pazymiai.join(', '));

    
    var pazymiuVidurkis = studentas.pazymiai.reduce(function (acc, pazymys) {
        return acc + pazymys;
    }, 0) / studentas.pazymiai.length;

    
    console.log("Pažymių vidurkis: " + pazymiuVidurkis.toFixed(2));
    
    
    console.log("-----");
}

var bendrasVidurkis = studentai.reduce(function (acc, studentas) {
    return acc + studentas.pazymiai.reduce(function (acc, pazymys) {
        return acc + pazymys;
    }, 0);
}, 0) / studentai.reduce(function (acc, studentas) {
    return acc + studentas.pazymiai.length;
}, 0);

console.log("Bendras visų studentų pažymių vidurkis: " + bendrasVidurkis.toFixed(2));
