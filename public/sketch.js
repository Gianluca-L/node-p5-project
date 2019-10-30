function preload(){
  // put preload code here
}
var socket;

function setup() {
  createCanvas(windowWidth,windowHeight)

  socket = io(); // nuova funzione che carcica la libreria scritta in index

  socket.on("mouseBroadcast", newDrawing);

  function newDrawing(receivedData) {

    fill('yellow');
    ellipse(receivedData.x, receivedData.y, 20)

  }

  background('red');
}

function draw() {

}

function mouseDragged() {
    fill("white");
    ellipse(mouseX,mouseY, 20);

    var sendData = {
      x:mouseX,
      y:mouseY
    }

    socket.emit('mouse', sendData);
}
