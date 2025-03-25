let baseCurrencyH1 = document.getElementById('base-currency');
let conversionRatesUl = document.querySelector('#conversion-rates');

async function getExchangeRates() {
	let response = await fetch('https://open.er-api.com/v6/latest/USD');

	let responseJson = await response.json();

	baseCurrencyH1.innerText = responseJson.base_code;
	
	console.log(responseJson.rates);
	let ratesArray = Object.entries(responseJson.rates);

	for (let i = 0; i < ratesArray.length; i++) {
		console.log(ratesArray[i][0]);
		console.log(ratesArray[i][1]);

		let newLi = document.createElement('li');
		newLi.classList.add('conversion-rate');
		newLi.setAttribute('id', ratesArray[i][0]);
		newLi.innerText = ratesArray[i][0] + ': ' + ratesArray[i][1];

		conversionRatesUl.appendChild(newLi);
	}
}

getExchangeRates();