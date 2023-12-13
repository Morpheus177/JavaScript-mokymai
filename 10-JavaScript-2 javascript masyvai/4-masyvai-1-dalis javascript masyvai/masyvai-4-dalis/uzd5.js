
"Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius.


let pazymiai=[4,9,8,6,8,4,2,10]
let surikiuotiPazymiai=pazymiai.slice().reverse((a,b)=a-b)
console.log(surikiuotiPazymiai)