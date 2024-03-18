// Užduotis 4(For):
// Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi, jei jo
// skaitmenų, pakeltų 3 - uoju laipsniu, suma lygi pačiam skaičiui.Raskite visus
// Amstrongo skaičius esančius intervale nuo 100 iki 999.

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

console.log(`Armstrongo skaičiai intervale nuo ${a} iki ${b}:`);

for (let i = a; i <= b; i++) {
    let [pirmas, antras, trecias] = i.toString().split('').map(Number);
    let suma = pirmas ** 3 + antras ** 3 + trecias ** 3;

    if (suma === i) {
        console.log(i);
    }
}

// neranda 1634 kodel ???