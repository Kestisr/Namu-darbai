const currency = process.argv[2];
const sum = process.argv[3];

async function changeCurrency(currency, sum) {
    const rates = await fetch(`https://api.frankfurter.app/latest?amount=${sum}&from=EUR&to=${currency}`);
    const changer = await rates.json();

    const rate = changer.rates;
    const convertedAmount = sum * rate;

    console.log(`${currency} kursas: ${rate}`);
    console.log(`${sum} EUR => ${convertedAmount} ${currency}`);
}

changeCurrency(currency, sum);



