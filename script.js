let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }

    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === "") {
        return;
    }

    const lastCharacter = currentInput[currentInput.length - 1];

    if (["+", "-", "*", "/"].includes(lastCharacter)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }

    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "0";
}

function calculate() {
    if (currentInput === "") {
        return;
    }

    try {
        const result = Function('"use strict"; return (' + currentInput + ')')();

        if (!isFinite(result)) {
            display.value = "Error";
            currentInput = "";
        } else {
            display.value = result;
            currentInput = result.toString();
        }
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}
