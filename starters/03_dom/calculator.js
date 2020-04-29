// Put your calculator's JavaScript here.
const input = document.querySelector("input");
let firstNumber = "";
let secondNumber = "";
let operator = "";

document.querySelectorAll("button")
.forEach(button => button.addEventListener("click", e => readButton(button)));


function readButton(button) {
    if (!isNumber(button.textContent) && button.textContent !== ".") {
        console.log(button.textContent + " is not a number");
        // this is not a number
        if (button.textContent == "=") {
            secondNumber = Number(input.value);
            input.value = performOperation();
        } else if (button.textContent == "c") {
            input.value = "";
            firstNumber = "";
            secondNumber = "";
        } else {
            // this is the operator case
            firstNumber = Number(input.value);
            input.value = "";
            operator = button.textContent;
        }
    } else {
        // this is a number
        console.log(button.textContent + " is a number");
        input.value += button.textContent;
    }

    console.log("Clicked " + button.textContent);
}

function isNumber(input) {
    const numberMatch = /^\d+$/;
    return numberMatch.test(input);
}

function performOperation() {
    let result = 0;
    console.log("Using operator " + operator);
    switch(operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case "/":
            // TODO: Probably want to catch divide by zero
            result = firstNumber / secondNumber;
            break;
        default:
            console.warn(`Invalid operator ${operator}`);

    }

    return result;
}