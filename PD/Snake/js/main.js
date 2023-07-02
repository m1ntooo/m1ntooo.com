// Types are for vscode to understand

/** @type {HTMLCanvasElement} */
let canvas

/** @type {CanvasRenderingContext2D} */
let ctx

/** @type {Snake} */
let snake

/** @type {Apple} */
let apple

/** @type {StorageHandler} */
let storage

let highscore
let score = 0

const tileCount = 13
let scl

let speed = 6
let pause = false


function init() {
	canvas = document.querySelector("#canvas")
	ctx = canvas.getContext("2d")

	storage = new StorageHandler()

	scl = canvas.width/tileCount

	apple = new Apple(9, Math.floor(tileCount/2), 5)
	snake = new Snake(4, Math.floor(tileCount/2), 3, "rgb(50, 255, 50)")

	highscore = storage._hscore || 0

	setInterval(loop, 1000/90)
}


// Press any key to restart is implemented in keypressed function in events.js

function loop() {
	if (pause) return

	// Background
	ctx.fillStyle = "black"
	ctx.fillRect(0, 0, canvas.width, canvas.height)

	apple.draw()
	
	snake.update()
	snake.draw()

	drawText()

	if(snake.head.collides(apple)) {
		// Generates new position for the apple and
		// appends new bodypart to tail if the head hits/eats the apple
		apple.generateNew()
		snake.appendNew()
		score++
	}

	if(score > highscore) {
		highscore = score
		storage._hscore = highscore
	}
}

function drawText() {
	ctx.font = scl*1.5 + 'px Arial';
	ctx.fillStyle = '#fff';
	ctx.fillText(score, canvas.width/2 - ctx.measureText(score).width/2, scl*2.5);

	ctx.font = scl*0.5 + 'px Arial';
	ctx.fillStyle = '#fff';
	ctx.fillText('High score: ' + highscore, canvas.width/2 - ctx.measureText('High score: ' + highscore).width/2, scl*3.5);
}

// Init function will get called when the site is fully loaded

window.onload = init