function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}


function getInputNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}


function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}


document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getInputNumbers();
    displayResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getInputNumbers();
    displayResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getInputNumbers();
    displayResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getInputNumbers();
    displayResult(divide(number1, number2));
});