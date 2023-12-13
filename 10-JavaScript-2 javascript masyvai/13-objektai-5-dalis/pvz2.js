let skaiciai = [3, 8, 5, 6, 9, 3, 10, 5];

// 1 metodas

let didziausias = skaiciai[0];

for (const skaicius of skaiciai) {
    if (skaicius > didziausias) {
        didziausias = skaicius;
    }
}

console.log('didziausias skaicius:', didziausias);

// 2 metodas

let didziausias2 = Math.max(...skaiciai);
console.log('didziausias skaicius:', didziausias2);
