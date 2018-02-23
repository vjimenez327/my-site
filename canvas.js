let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, .5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, .5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, .5)';
// c.fillRect(300, 300, 100, 100);

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// for (let i = 0; i < 15; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;

//   c.beginPath();
//   c.arc(x, y, 60, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// }


let x = 200;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, 200, 60, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();
  x += 1;
}

animate();

console.log(canvas);