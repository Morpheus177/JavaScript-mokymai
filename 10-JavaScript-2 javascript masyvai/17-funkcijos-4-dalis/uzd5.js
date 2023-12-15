// Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).


// var vienas

function arPirminis(sk) {
    if(sk <=1) {
        return false;
    }
    for(let daliklis=2; daliklis < sk; daliklis++) {
        if (sk % daliklis === 0) {
             return false + 'nera pirminis';
        }
    }
    return true + 'yra pirminis';
}
for(let daliklis = 2; daliklis <=15; daliklis++){
    let pirminis = arPirminis(i);
    console.log('${daliklis} ${pirminis}');
}
