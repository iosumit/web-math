window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        baseAlpha = 0.5,
        offset = 0.5,
        speed = 0.1,
        angle = 0;

    render();

    function render() {
        var alpha = baseAlpha + Math.sin(angle) * offset; //( y is repeatitive value up and down)

        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";

        context.clearRect(0, 0, width, height); // Clearing the canvas
        context.beginPath();
        
        context.arc(centerX, centerY, 100,  0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        console.log(alpha);

        requestAnimationFrame(render);
    } 
}