/* Faile studentai.json pateikiamas JSON formatu studentų sąrašas (masyvas), 
jų duomenys ir pažymiai. Nuskaitykite duomenis iš masyvo, suskaičiuokite ir išveskite:
1. Studentų kiekį
2. Studentų amžiaus vidurkį
3. Studentų pažangumo vidurkį (visų pažymių vidurkį)
4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:
Jonas Jonaitis 5.5
Petras Petraitis 9.3
*/


const fs = require("fs");
const str = fs.readFileSync("studentai.json");
const students = JSON.parse(str);

// 1. 
console.log(`Viso studentų: ${students.length}`);


//2.
const studentMid = students.reduce((acc, student) => acc + student.amzius, 0) / students.length;
console.log(`Studentų amžiaus vidurkis : ${studentMid}`);

//3.
const paz = [];
students.forEach((student) => student.pazymiai.forEach((p) => paz.push(p)));

const gradesMid = (paz.reduce((acc, pazymiai) => acc + pazymiai, 0) / paz.length).toFixed(2);

console.log(`Visų studentų pažangumo vidurkis: ${gradesMid}.`);

//4.

students.forEach((student) => {
    let suma = 0;
    student.pazymiai.forEach((pazimys) => {
        suma += pazimys;
    })
    console.log(`Studentas: ${student.vardas} ${student.pavarde} ir jo vidurkis: ${(suma / student.pazymiai.length).toFixed(2)}`);
})