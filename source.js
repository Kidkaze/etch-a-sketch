//Create Grid
const container = document.querySelector('#etch-container');

function createGrid(gridSize) {
	for (let i = 0; i < gridSize; i++) {
		let row = document.createElement('div');
		row.className = 'row';
		document.documentElement.style.setProperty('--columns-row', gridSize);
		for (let j = 0; j < gridSize; j++) {
			let square = document.createElement('div');
			square.className = 'square';
			row.appendChild(square);
		}
		container.appendChild(row);
	}

	//Div colour change
	const squares = document.querySelectorAll('.square');

	function colourGrid() {
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
	}

	colourGrid();
}
createGrid(16);

// Reset button
const reset = document.querySelector('.reset-btn');
reset.addEventListener('click', () => {
	//remove the colour
	function removeColour() {
		while (container.firstChild) {
			container.firstChild.remove();
		}
		while (container.firstChild) {
			container.firstChild.remove();
		}
	}

	removeColour();
	createGrid(16);
	// colourGrid();
});

// Grid Change Button
const gridChng = document.querySelector('.gridChng-btn');
gridChng.addEventListener('click', () => {
	// create a new grid
	const gridNum = prompt('How many squares do you want?');
	if (gridNum <= 100) {
		createGrid(parseInt(gridNum));
	} else {
		prompt('Please choose a number up to 100');
	}
	createGrid(parseInt(gridNum));
});
