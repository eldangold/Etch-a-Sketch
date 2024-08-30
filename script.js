let rowBlock = document.createElement("div");
rowBlock.className = "rowBlock";
let rowContainer = document.getElementById("rowContainer");
let columnBlock = document.createElement("div");
columnBlock.className = "columnBlock";

for (let x = 1; x <= 10; x++) {
    rowBlock.appendChild(columnBlock.cloneNode(true));
 }
 
 for (let i = 0; i < 10; i++) {
    rowContainer.appendChild(rowBlock.cloneNode(true));
}

for (block of document.querySelectorAll(".columnBlock")) {
    block.addEventListener("mouseover", hoverEffect);
   }

function hoverEffect(block) {
    block.target.classList.add("isHovered");

}