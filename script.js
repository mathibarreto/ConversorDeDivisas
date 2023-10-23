const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Agrega tasas de cambio fijas aquí (ejemplo: 1 USD = 0.85 EUR)
    const exchangeRates = {
        "USD": 1,
        "EUR": 0.85,
        "UYU": 40
        ,"BRL": 5,
        "ARG": 1000,
        "CHI": 950

        // Agrega más tasas de cambio aquí
    };

    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
        const result = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
        resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        resultElement.textContent = "Las tasas de cambio no están disponibles.";
    }
});
