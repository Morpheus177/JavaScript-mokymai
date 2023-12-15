function atsSkaicius(minReiksme, maxReiksme) {
    let skaicius = Math.floor(Math.random() * (maxReiksme - minReiksme)) + minReiksme;
    return skaicius;
}

let ats1 = atsSkaicius(1, 10);
console.log(ats1);

if (ats1 % 2 == 0) {
    console.log(ats1, 'yra lyginis');
} else {
    console.log(ats1, 'yra nelyginis');
}

if (ats1 > 0) {
    console.log(ats1, 'yra teigiamas');
} else if (ats1 < 0) {
    console.log(ats1, 'yra neigiamas');
} else {
    console.log(ats1, 'yra lygus 0');
}

// ats1 = atsSkaicius(2, 20);