// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

// Set up our canvas for drawing
const width = canvas.width;
const height = canvas.height;

// Create random X and Y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // This begins the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw Function

// Write a handler for the keys

// Clear / shake Function

// Listen for arrow keys
