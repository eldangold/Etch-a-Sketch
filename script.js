let div = document.createElement("div");
div.className = "rowBlock";
let rowContainer = document.getElementById("rowContainer");
let columnContainer = document.createElement("div");
columnContainer.className = "columnContainer";
let columnBlock = document.createElement("div");
columnBlock.className = "columnBlock";


for (let x = 1; x <= 100; x++) {
    columnContainer.appendChild(columnBlock.cloneNode(true));
 } 

for (let x = 1; x <= 100; x++) {
    div.appendChild(columnContainer);
 }


 
 for (let i = 0; i < 100; i++) {
    rowContainer.appendChild(div.cloneNode(true));
}