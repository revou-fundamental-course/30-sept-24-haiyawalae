function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Masukkan suhu dalam Celsius");
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);

    document.getElementById("calculation-details").innerHTML = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation-details").innerHTML = "";
}

function reverseConversion() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Masukkan suhu dalam Fahrenheit");
        return;
    }

    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);

    document.getElementById("calculation-details").innerHTML = `(${fahrenheit}°F - 32) * (5/9) = ${celsius.toFixed(2)}°C`;
}
