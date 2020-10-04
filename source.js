//Create Grid
const container = document.querySelector('#container');
function createGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 16; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
createGrid();

// Div colour change
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        function randomColor() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
            square.style.background = bgColor;
        }
        square.style.background = randomColor();
    });
});

function clearGrid() {}

//button reset
const button = document.createElement('button');
button.innerText = 'Reset';
button.addEventListener('click', () => {});
container.appendChild(button);
