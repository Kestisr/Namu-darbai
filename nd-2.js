// Užduotis 2(IF - 1):
// Pirmosios vasaros olimpinės žaidynės įvyko 1896 m.Atėnuose.Po to jos vyko arba 
// turėjo vykti kas ketveri metai, t.y. 1900 m. – antrosios, 1904 m. – trečiosios ir t.t.
// Neįvykusioms žaidynėms skiriamas eilės numeris, o jų metai vis tiek laikomi 
// olimpiniais.Žinomi metai M.Nustatykite olimpinių žaidimų numerį, jei metai yra 
// olimpiniai arba pasakykite, kad metai ne olimpiniai.Programa turi paprašyti įvesti 
// metus, ir išvesti ar tai buvo olimpiniai metai ar ne, jei tai buvo olimpiniai 
// metai programa turi taip pat išvesti ir numerį.

const year = Number(process.argv[2]);

if ((year - 1896) % 4 === 0) {
    const number = ((year - 1896) / 4) + 1;
    console.log(`${year} metais įvyko olimpinės žaidynės, jų numeris: ${number}`);
} else {
    console.log("Olimpinės žaidynės nevyko.");
}
