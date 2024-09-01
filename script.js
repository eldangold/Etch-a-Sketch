function makeGrid(size) {

    let rowBlock = document.createElement("div");
    rowBlock.className = "rowBlock";
    let rowContainer = document.createElement("div");
    rowContainer.id = "rowContainer";
    let columnBlock = document.createElement("div");
    columnBlock.className = "columnBlock";

    for (let x = 1; x <= size; x++) {
        rowBlock.appendChild(columnBlock.cloneNode(true));
    }
    
    for (let i = 0; i < size; i++) {
        rowContainer.appendChild(rowBlock.cloneNode(true));
        mainContainer.appendChild(rowContainer);
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
    block.target.style.backgroundColor = hoverColor();

}

function clearStart() {
    let gridSize = prompt("Type your preferred grid size");
    let gridExists = document.getElementById("rowContainer");
    gridExists.remove()
    if (gridSize>100) {
        alert("Number is too big. Value of 100 will be used instead");
        makeGrid(100);
        }
        else makeGrid(gridSize);
    }

makeGrid(16);