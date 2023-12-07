let iveiktiKM = 0;
let visiKM = 3210;
let dienos = 0;

while (iveiktiKM < visiKM) {
    let dienosKM = Math.floor(Math.random() * 500) + 200;
    console.log('Šiandien įveikėme:', dienosKM, 'kilometrų');
    iveiktiKM += dienosKM;
    console.log('Viso nueita:', iveiktiKM, "kilometrų");
    let procentai = iveiktiKM * 100 / visiKM;
    console.log(`Nueita procentaliai: ${procentai}%`);
    dienos++
    console.log("Praėjo", dienos, "dienos");
}