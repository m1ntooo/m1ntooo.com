const keys = {};
const mouse = { x: 0, y: 0, isDown: false };

const mousePressed = (e) => mouse.isDown = true;
const mouseReleased = (e) => mouse.isDown = false;

const keyPressed = (e) => {
    if(snake.isDead)
        window.location.reload()
    
    keys[e.key.toLowerCase()] = true;
}
const keyReleased = (e) => keys[e.key.toLowerCase()] = false;

document.addEventListener("keydown", keyPressed);
document.addEventListener("keyup", keyReleased);

document.addEventListener("mousedown", mousePressed);
document.addEventListener("mouseup", mouseReleased);

document.addEventListener('mousemove', (e) => {
    let rect = canvas.getBoundingClientRect();
    [mouse.x, mouse.y] = [e.clientX - rect.left, e.clientY - rect.top];
});