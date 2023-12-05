var square = document.getElementById("Signature");
var paper = square.getContext("2d");
var pressedMouse = false; 
var x;
var y;
var colorLine ="black";
var key = {C: 67};
var clean = document.getElementById("clear");

document.addEventListener("mousedown", startDrawing);
document.addEventListener("mousemove", drawLine);
document.addEventListener("mouseup", stopDrawing);
document.addEventListener("keydown", clearCanvas);
clean.addEventListener("click" , clearCanvas)

function startDrawing(eventvs01){
	pressedMouse = true;
	x = eventvs01.offsetX;
	y = eventvs01.offsetY;
}

function drawLine(eventvs02) {
	if (pressedMouse) {
		document.getElementById("Signature").style.cursor = "crosshair";
		var xM = eventvs02.offsetX;
		var yM = eventvs02.offsetY;
		drawing_line(colorLine, x, y, xM, yM, paper);
		x = xM;
		y = yM;
	}
}

function stopDrawing(eventvs03) {
	pressedMouse = false;
	document.getElementById("Signature").style.cursor = "default";
}

function clearCanvas() {
	
		paper.clearRect(0, 0, square.width, square.height);
	
}

drawing_line("#FF6347", x-1, y, x, y, paper);

function drawing_line(color, x_start, y_start, x_end, y_end, board){
	board.beginPath();
	board.strokeStyle = color;
	board.lineWidth = 2;
	board.moveTo(x_start,y_start);
	board.lineTo(x_end,y_end);
	board.stroke(); 
	board.closePath();
} 