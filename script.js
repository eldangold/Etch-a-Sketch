let rowBlock = document.createElement("div");
rowBlock.className = "rowBlock";
let rowContainer = document.getElementById("rowContainer");
let columnBlock = document.createElement("div");
columnBlock.className = "columnBlock";

function makeGrid(size) {
    for (let x = 1; x <= size; x++) {
        rowBlock.appendChild(columnBlock.cloneNode(true));
    }
    
    for (let i = 0; i < size; i++) {
        rowContainer.appendChild(rowBlock.cloneNode(true));
    }

    for (block of document.querySelectorAll(".columnBlock")) {
        block.addEventListener("mouseover", hoverEffect);
    }
}

let hoverColor = () =>  { 
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`
}

function hoverEffect(block) {
    //block.target.classList.add("isHovered");
    block.target.style.backgroundColor = hoverColor();

}
let gridSize = prompt("Type your preferred grid size");
if (gridSize>100) {
    alert("Number is too big. Value of 100 will be used instead");
    makeGrid(100);
}

else {
    makeGrid(gridSize);
}