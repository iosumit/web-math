window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        xRadius = 200,
        yRadius = 400,
        xspeed = 0.1,
        yspeed = 0.131,
        xangle = 0, 
        yangle = 0, 
        angle = 0, 
        x, y;

    render();

    function render() {
        context.clearRect(0, 0, width, height); // Clearing the canvas
        
        x = centerX + Math.cos(xangle) * xRadius; 
        y = centerY + Math.sin(yangle) * yRadius; 

        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        xangle += xspeed; 
        yangle += yspeed; 
        console.log(x, y);

        requestAnimationFrame(render);
    } 
}