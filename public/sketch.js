
var socket;

function setup() {
    var canvasDiv = document.getElementById('board');
    var canWidth = canvasDiv.clientWidth;
    var canHeight = canvasDiv.clientHeight;

  var canvas = createCanvas(canWidth,canHeight);
  canvas.parent('board')
  background('#444040e6');
}
socket = io.connect('http://localhost:3000');
socket.on('mouse',
function(data) {
  console.log("Got: " + data.x + " " + data.y);
  fill(0,0,255);
  noStroke();
  ellipse(data.x, data.y, 20, 20);
}
);

function mouseDragged() {
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);
  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}


// socket.on('messageHandler',function(data){
//     console.log(data.msg)
//     var z = document.createElement('li');
//     // li.id = cli;
//     z.innerText= data.msg;
//     console.log(z)

//     document.getElementById('msgul').appendChild(z);
// });
// document.querySelector("button").addEventListener('click',function(){
//     // alert("clicked");
//     var datamsg = document.getElementById('textMessage').value;
//     console.log(datamsg)
//     var dataMessage = {
//         msg:datamsg
//     }
//     console.log(dataMessage)

//     socket.emit('messageHandler',dataMessage)
//     });