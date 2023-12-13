function pirma() {
    console.log('pirmos funkcijos pradzia');
    console.log('pirmos funkcijos pabaiga');
}

function antra() {
    console.log('antros funkcijos pradzia');
    pirma();
    console.log('antros funkcijos pabaiga');
}

pirma();
antra();