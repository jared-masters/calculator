const buttonsGrid = document.querySelector(".buttons-grid");
const inputView = document.querySelector(".input-view");

let num1 = 0;
let num2 = 0;
let operator = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }
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

buttonsGrid.addEventListener("click", e => {
    if (e.target.classList.contains("button-number")) {
        if (inputView.textContent == "0" ||
            (operator != "" && Number(inputView.textContent) == num1)
        ) {
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
        operator = e.target.textContent;
    }

    if (e.target.classList.contains("result")) {
        inputView.textContent = operate(num1, num2, operator);
    }

    if (e.target.classList.contains("button-clear")) {
        inputView.textContent = "0";
        num1 = 0;
        num2 = 0;
        operator = 0;
    }
})