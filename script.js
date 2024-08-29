var div = document.createElement("div");
div.className = "divSquare";
let container = document.getElementById("container");

for (let i = 0; i < 10; i++) {
 container.appendChild(div.cloneNode(true));
}