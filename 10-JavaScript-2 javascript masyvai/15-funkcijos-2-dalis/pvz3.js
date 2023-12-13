function kvadratas(skaicius) {
    console.log('skaiciaus', skaicius, 'kvadratas:', skaicius * skaicius);
}

function arLyginis(skaicius) {
    if (skaicius % 2 == 0) {
        console.log('skaicius', skaicius, 'yra lyginis');
    } else {
        console.log('skaicius', skaicius, 'yra nelyginis');
    }
}

function isvedimas(skaicius) {
    kvadratas(skaicius);
    arLyginis(skaicius);
}

isvedimas(5);
isvedimas(4);
isvedimas(9);
isvedimas(3);
isvedimas(-2);



