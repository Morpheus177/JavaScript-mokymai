// Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).


// var vienas

function arPirminis(num) {
    if(num <=1) {
        return false;
    }
    for(let daliklis=2; daliklis < num; daliklis++) {
        if (num % daliklis === 0) {
             return false + 'ne pirminis';
        }
    }
    return true + ' pirminis';
}
for(let daliklis = 2; daliklis <=15; daliklis++){
    let pirminis = arPirminis(i);
    console.log('${daliklis} ${pirminis}');
}
