const buttonsGrid = document.querySelector(".buttons-grid");
const inputView = document.querySelector(".input-view");

let num1 = null;
let num2 = null;
let operator = "";
let resultDisplayed = false;

function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    if (b === 0) {
        resetValues();
        return "Error"
    }
    return Math.round((a / b) * 100) / 100;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return 0;
    }
}

function resetValues() {
    num1 = null;
    num2 = null;
    operator = "";
}

function triggerResult() {
    const currentResult = operate(num1, num2, operator);
    inputView.textContent = currentResult;
    num1 = currentResult;
    num2 = null;
}

buttonsGrid.addEventListener("mouseover", e => {
    if (e.target.classList.contains("button")) {
        e.target.style.backgroundColor = "lightgray";
    }
});

buttonsGrid.addEventListener("mouseout", e => {
    if (e.target.classList.contains("button")) {
        e.target.style.backgroundColor = "rgb(225, 225, 225)";
    }
});

buttonsGrid.addEventListener("mousedown", e => {
    if (e.target.classList.contains("button")) {
        e.target.style.scale = 0.98;
    }
});

buttonsGrid.addEventListener("mouseup", e => {
    if (e.target.classList.contains("button")) {
        e.target.style.scale = 1.0;
    }
});

buttonsGrid.addEventListener("click", e => {
    if (e.target.classList.contains("button-number") ||
        e.target.classList.contains("button-decimal")) {

        if (e.target.classList.contains("button-decimal") &&
            inputView.textContent.includes(".")) {
            return;
        }

        if (inputView.textContent == "0" || inputView.textContent == "Error" ||
            (operator != "" && Number(inputView.textContent) == num1) || resultDisplayed === true
        ) {
            resultDisplayed = false;
            inputView.textContent = e.target.textContent;
        } else {
            inputView.textContent += e.target.textContent;
        }

        if (operator == "") {
            num1 = Number(inputView.textContent);
        } else {
            num2 = Number(inputView.textContent);
        }
    }

    if (e.target.classList.contains("operator")) {
        if (num1 != null ) {
            if (num2 != null) {
                triggerResult();
            }
            operator = e.target.textContent;
        }
    }

    if (e.target.classList.contains("result")) {
        resultDisplayed = true;
        triggerResult();
    }

    if (e.target.classList.contains("button-clear")) {
        inputView.textContent = "0";
        resetValues();
    }

    if (e.target.classList.contains("button-delete")) {
        if (resultDisplayed) {
            return;
        }
        
        if (operator == "") {
            num1 = Math.floor(num1 / 10);
            inputView.textContent = num1;
        } else {
            num2 = Math.floor(num2 / 10);
            inputView.textContent = num2;
        }
    }
})