"use strict";

const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

celsiusInput.addEventListener("input", updateTemperatures);
fahrenheitInput.addEventListener("input", updateTemperatures);
kelvinInput.addEventListener("input", updateTemperatures);
