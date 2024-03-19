// Užduotis 1
// Faile pateiktos dienos oro temperatūros.Parašykite programą kuri surastų ir išvestų
//  didžiausią ir mažiausią temperatūrą, bei dienas kuriomis buvo šios temperatūros.
// Failo pavyzdys:
// 1 2 7 3 4 6 - 1 2 4 - 3 - 3 - 5 1 5 6 7 5 9 2 3 6 7 8 6 3 6 7 5 6 7 1

const fs = require("fs");
let temperatures = fs.readFileSync("Book1.csv").toString().split(" ");
console.log(temperatures);
function findMinMax(temperatures) {
    let min = temperatures[0];
    let max = temperatures[0];
    let minDay = 1;
    let maxDay = 1;
    console.log(min);
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < min) {
            min = temperatures[i];
            minDay = i + 1;
            console.log
        } else if (temperatures[i] > max) {
            max = temperatures[i];
            maxDay = i + 1;
        }
    }

    return {
        min,
        max,
        minDay,
        maxDay,
    };
}


const { min, max, minDay, maxDay } = findMinMax(temperatures);

// Rezultatų išvedimas
console.log(`Mažiausia temperatūra: ${min}°C (${minDay} diena)`);
console.log(`Didžiausia temperatūra: ${max}°C (${maxDay} diena)`);

