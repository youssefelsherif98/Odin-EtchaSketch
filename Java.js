console.log("JavaScript is running");

// This selects the container element and the button
const container = document.getElementById("con");
const resizeButton = document.getElementById("resizeButton")

// This function creates a 16x16 grid of square divs
function createGrid(size) {
  // this removes existing squares
  container.innerHTML = "";
  const itemSize = 100 / size;
  // this is a loop to create the grid
  for (let i = 0; i< size * size; i++) {
    const div = document.createElement("div"); // This tells it to create a div element
    div.classList.add("grid-item"); // this tells it to give it a class called grid-item
    div.style.flexBasis = `${itemSize}%`;
    container.appendChild(div);
    
    // this adds a hover effect
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black'; 
    });
  }
}

createGrid(16); // this calls the creatgrid function and specifies size is 16
                // size*size is now 16*16, and because i<size*size, its not 16 * 16 - 1

              resizeButton.addEventListener('click', () => {
                  let size = parseInt(prompt("Enter the number of squares per side (maximum 100):"), 10); // Prompt user for input
                
                  if (isNaN(size) || size < 1) { // Check if the input is not a number or less than 1
                    alert("Please enter a valid number greater than 0."); // Show an error if invalid
                  } else if (size > 100) { // Limit the input to a maximum of 100
                    alert("Please enter a number less than or equal to 100."); // Show an error if too large
                  } else {
                    createGrid(size); // Create a new grid with the user's input size
                  }
                });