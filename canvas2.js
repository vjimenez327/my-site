// document.addEventListener('mouseover', function (e) {
//   e.preventDefault()
// })
var canvas = document.getElementsByTagName('canvas')[0],
  x = canvas.getContext('2d'),
  pr = window.devicePixelRatio || 1,
  w = window.innerWidth,
  h = window.innerHeight,
  f = 90,
  q,
  radius = 0,
  u = Math.PI*2,
  v = Math.cos,
  z = Math.random
canvas.width = w*pr
canvas.height = h*pr
x.scale(pr, pr)
x.globalAlpha = 0.6


function i(){
  x.clearRect(0, 0, w, h)
  q = [ {x:0, y:h * .7 + f}, {x:0, y:h * .7 - f}]
  while(q[1].x<w+f) d(q[0], q[1])
}
function d(i,j){   
  x.beginPath()
  x.moveTo(i.x, i.y)
  x.lineTo(j.x, j.y)
  var k = j.x + (z()*2-0.25)*f,
      n = y(j.y)
  x.lineTo(k, n)
  x.closePath()
  radius-=u/-50
  x.fillStyle = '#'+(v(radius)*127+128<<16 | v(radius+u/3)*127+128<<8 | v(radius+u/3*2)*127+128).toString(16)
  x.fill()
  q[0] = q[1]
  q[1] = {x:k,y:n}
}
function y(p){
  var t = p + (z()*2-1.1)*f
  return (t>h||t<0) ? y(p) : t
}
document.onclick = i
document.ontouchstart = i

// document.mouseover = i
i()