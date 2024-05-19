"use strict";

const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

function updateTemperatures() {
  if (document.activeElement === celsiusInput) {
    let celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
      let fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
      let kelvin = (celsius + 273.15).toFixed(2);
      fahrenheitInput.value = fahrenheit;
      kelvinInput.value = kelvin;
      localStorage.setItem("celsius", celsius);
      localStorage.setItem("fahrenheit", fahrenheit);
      localStorage.setItem("kelvin", kelvin);
    }
  } else if (document.activeElement === fahrenheitInput) {
    let fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
      let celsius = (((fahrenheit - 32) * 5) / 9).toFixed(2);
      let kelvin = (((fahrenheit - 32) * 5) / 9 + 273.15).toFixed(2);
      celsiusInput.value = celsius;
      kelvinInput.value = kelvin;
      localStorage.setItem("celsius", celsius);
      localStorage.setItem("fahrenheit", fahrenheit);
      localStorage.setItem("kelvin", kelvin);
    }
  } else if (document.activeElement === kelvinInput) {
    let kelvin = parseFloat(kelvinInput.value);
    if (!isNaN(kelvin)) {
      let celsius = (kelvin - 273.15).toFixed(2);
      let fahrenheit = (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
      celsiusInput.value = celsius;
      fahrenheitInput.value = fahrenheit;
      localStorage.setItem("celsius", celsius);
      localStorage.setItem("fahrenheit", fahrenheit);
      localStorage.setItem("kelvin", kelvin);
    }
  }
}

celsiusInput.addEventListener("input", updateTemperatures);
fahrenheitInput.addEventListener("input", updateTemperatures);
kelvinInput.addEventListener("input", updateTemperatures);

function clearFields() {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
  localStorage.removeItem("celsius");
  localStorage.removeItem("fahrenheit");
  localStorage.removeItem("kelvin");
}

function loadStoredValues() {
  if (localStorage.getItem("celsius") !== null) {
    celsiusInput.value = localStorage.getItem("celsius");
  }
  if (localStorage.getItem("fahrenheit") !== null) {
    fahrenheitInput.value = localStorage.getItem("fahrenheit");
  }
  if (localStorage.getItem("kelvin") !== null) {
    kelvinInput.value = localStorage.getItem("kelvin");
  }
}

window.addEventListener("load", loadStoredValues);
