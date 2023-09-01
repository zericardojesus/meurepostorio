const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToconvert = document.querySelector(".currency-value-to-convert")
    const currencyValueconverted = document.querySelector(".currency-value")

    const dolarToday = 5.20
    const euroToday = 5,34

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    

    currencyValueconverted.innerHTML = new Intl.NumberFormat("es-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)