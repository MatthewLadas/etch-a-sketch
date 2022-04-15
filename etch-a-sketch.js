// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 30;
// Set up our canvas for drawing
const width = canvas.width;
const height = canvas.height;

// Create random X and Y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.beginPath(); // This begins the drawing
ctx.moveTo(x, y); // Where we want the DOT to go
ctx.lineTo(x, y);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.stroke();

// Write a draw Function
function draw({ key }) {
	hue += 5; // Increment the hue value of ctx.strokeStyle
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	console.log(key);
	ctx.beginPath(); // Start the path
	ctx.moveTo(x, y); // Move to where the DOT used to be
	// x = x - MOVE_AMOUNT; // We change the X and Y values
	// y = y - MOVE_AMOUNT; // We change the X and Y values
	switch (key) {
		case 'ArrowUp':
			y = y - MOVE_AMOUNT;
			break;
		case 'ArrowDown':
			y = y + MOVE_AMOUNT;
			break;
		case 'ArrowLeft':
			x = x - MOVE_AMOUNT;
			break;
		case 'ArrowRight':
			x = x + MOVE_AMOUNT;
			break;
		default:
	}
	ctx.lineTo(x, y); // Create a line to the new X and Y values
	ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
	if (e.key.includes('Arrow')) {
		draw({ key: e.key });
	}
}

// Clear / shake Function
function clearCanvas() {
	canvas.classList.add('shake');
	ctx.clearRect(0, 0, width, height);
	canvas.addEventListener(
		'animationend',
		function () {
			canvas.classList.remove('shake');
		},
		{ once: true }
	);
}
// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
