const buttonsGrid = document.querySelector(".buttons-grid");

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