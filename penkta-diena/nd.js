// Užduotis „Trupmenos“

// 1. Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai: sveikojiDalis, skaitiklis, daliklis
// 2. Sukurkime klasei setter‘ius ir getter‘ius
// 3. Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu: sveikojiDalis skaitiklis / daliklis(pvz.: 1 2 / 5)
// 4. Ištestuokime programinį kodą sukurdami objektą, suteikime kintamiesiems reikšmes ir išveskime rezultatą.
// 5. Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį skaičių prie trupmenos, ištestuokime pakoreguotą kodą.
// 6. Sukurkite dar vieną papildomą metodą: prideti(sveikasisSkaicius, skaitiklis, vardiklis).
// Nepamirškite jog pridedant skaičių reikia subendravardiklinti).
// 7. Sukurkime metodą pridetiTrupmena(x), šis metodas turės prie esamos trupmenos pridėti paduotą trupmeną.Nepamirškite jog taip pat po šio veiksmo reikės suprastinti trupmeną.
// 8. Sukurkime metodą toDouble() kuris grąžintų esamą trupmenos reikšmę realiuoju skaičiumi(per kablelį).

// Papildomai padarykite:
// 1. Sukurkime metodą prastinti(), jis turėtų suprastinti trupmeną.Metodą padarykime matomą tik pačiam objektui(jis turi būti nepasiekiamas iš išorės).
// 2. Padarykime jog po kiekvieno seterio ir po pridėjimo metodų įvykdymo būtų iškviečiamas prastinimo metodas.

class trupmena {
    // Privatus kintamieji
    #sveikojiDalis = 0;
    #skaitiklis = 0;
    #daliklis = 0;

    //Konstruktorius
    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = sveikojiDalis;
        this.#skaitiklis = skaitiklis;
        this.#daliklis = daliklis;
    }

    // Getteriai ir setteriai
    set sveikojiDalis(sveikojiDalis) {
        this.#sveikojiDalis = sveikojiDalis;
    }
    get sveikojiDalis() {
        return this.#sveikojiDalis;
    }

    set skaitiklis(skaitiklis) {
        this.#skaitiklis = skaitiklis;
    }

    get skaitiklis() {
        return this.#skaitiklis;
    }

    set daliklis(daliklis) {
        this.#daliklis = daliklis;
    }

    get daliklis() {
        return this.#daliklis;
    }

    toString() {
        if (this.#sveikojiDalis === 0) {
            return `${this.#skaitiklis} / ${this.#daliklis}`;
        } else {
            return `${this.#sveikojiDalis} ${this.#skaitiklis} / ${this.#daliklis}`;
        }
    }

    pridetiInt(sveikasisSkaicius) {
        return this.#sveikojiDalis += sveikasisSkaicius
    }


    pridetiTrupmena(sveikojiDalis, skaitiklis, daliklis) {
        const bendrasdaliklis = this.#daliklis * daliklis;
        const pirmosTrupmenosSkaitiklis = (this.#sveikojiDalis * this.#daliklis + this.#skaitiklis) * daliklis;
        const antrosTrupmenosSkaitiklis = (sveikojiDalis * daliklis + skaitiklis) * this.#daliklis;

        const naujaSveikojiDalis = Math.floor((pirmosTrupmenosSkaitiklis + antrosTrupmenosSkaitiklis) / bendrasdaliklis);
        const naujasSkaitiklis = (pirmosTrupmenosSkaitiklis + antrosTrupmenosSkaitiklis) % bendrasdaliklis;

        return `${naujaSveikojiDalis} ${naujasSkaitiklis}/ ${bendrasdaliklis}`;
    }
}

const a = new trupmena(1, 2, 3);
console.log(a.toString());

a.pridetiInt(2);
console.log(a.toString());

a.pridetiTrupmena(5, 2, 3)
console.log(a.toString());


