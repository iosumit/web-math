window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        xRadius = 200,
        yRadius = 400,
        speed = 0.005,
        angle = 0, 
        x, y;

    render();

    function render() {
        // context.clearRect(0, 0, width, height); // Clearing the canvas
        
        x = centerX + Math.cos(angle) * xRadius; 
        y = centerY + Math.sin(angle) * yRadius; 

        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angle += speed; 
        console.log(x, y);

        requestAnimationFrame(render);
    } 
}