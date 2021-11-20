window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        radius = 200,
        speed = 0.01,
        angle = 0, 
        x, y;

    render();

    function render() {
        context.clearRect(0, 0, width, height); // Clearing the canvas
        
        x = centerX + Math.cos(angle) * radius; 
        y = centerY + Math.sin(angle) * radius; 

        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angle += speed; 
        console.log(x, y);

        requestAnimationFrame(render);
    } 
}