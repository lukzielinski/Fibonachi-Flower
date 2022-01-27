const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;
let positionX = 0;

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    size +=0.05;
    positionX += 0.5;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX,300, size,0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    requestAnimationFrame(animate);
}

animate();