let atliktosUzduotys = 0;
let uzduociuTikslas = 130;

while (atliktosUzduotys < uzduociuTikslas) {
    let dienosUzduotys = Math.floor(Math.random() * 20) + 1;
    atliktosUzduotys += dienosUzduotys;
    console.log('Šiandien atliktų užduočių:', dienosUzduotys);
    console.log('Viso atliktų užduočių:', atliktosUzduotys);
    let procentai = atliktosUzduotys * 100 / uzduociuTikslas;
    console.log(`Atlikta projekto: ${procentai}%`);
}