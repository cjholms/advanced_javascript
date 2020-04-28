// Put your calculator's JavaScript here.
const input = document.querySelector("input");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

document.querySelectorAll("button")
.forEach(button => button.addEventListener("click", e => readButton(button)));


function readButton(button) {
    if (Number.parseInt(button.textContent) || button.textContent === "." || 
    button.textContent === "0") {
        input.value += button.textContent;
    } else if (button.textContent !== "c" && button.textContent !== "=") {
        firstNumber = Number(input.value);
        input.value = "";
        operator = button.textContent;
        console.log("Operator is " + operator);
    } else if (button.textContent === "=") {
        secondNumber = Number(input.value);
        input.value = performOperation();
    } else if (button.textContent === "c") {
        input.value = "";
    }

    console.log("Clicked " + button.textContent);
}

function performOperation() {
    let result = 0;
    console.log("Reading operator " + operator);
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
            result = firstNumber / secondNumber;
            break;
        default:
            console.warn(`Invalid operator ${operator}`);

    }

    return result;
}