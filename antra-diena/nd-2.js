// Užduotis 2
// Faile pateikti skaičiai(sveikieji, iš intervalo nuo 0 iki 9), parašykite JS 
// programą kuri suskaičiuotų kiek ir kokių skaičių yra tekstiniame faile.

const fs = require("fs");
let data = fs.readFileSync("Book2.csv").toString().split(" ");
console.log(data);

const numbersCount = {};

