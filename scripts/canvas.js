let canvas = document.querySelector('canvas');

let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var colorArray = [
  '#23CAD0',
  '#82E1E4',
  '#62D9DD',
  '#43D1D7',
  '#039297'
]


function Circle (x, y, dx, dy, radius) {
  this.x =  x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowBlur=10;
    c.shadowColor='#A4A4A4';
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function()  {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { this.dx = -this.dx;}
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
})

var circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < 100; i++){
    let radius = 85;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}

init();
animate();

console.log(canvas);