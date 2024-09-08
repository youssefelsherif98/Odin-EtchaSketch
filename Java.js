console.log("JavaScript is running");

// This selects the container element
const container = document.getElementById("con");

// This function creates a 16x16 grid of square divs
function createGrid(size) {
  // this is a loop to create the grid
  for (let i = 0; i< size * size; i++) {
    const div = document.createElement("div"); // This tells it to create a div element
    div.classList.add("grid-item"); // this tells it to give it a class called grid-item
    container.appendChild(div); // this tells it the divs we create are children of the container element we selected
  }
}
createGrid(16); // this calls the creatgrid function and specifies size is 16
                // size*size is now 16*16, and because i<size*size, its not 16 * 16 - 1