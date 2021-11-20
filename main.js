window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        baseRadius = 150,
        offset = 50,
        speed = 0.1,
        angle = 0;

    render();

    function render() {
        var radius = baseRadius + Math.sin(angle) * offset; //( y is repeatitive value up and down)

        context.clearRect(0, 0, width, height); // Clearing the canvas
        context.beginPath();

        context.arc(centerX, centerY, radius,  0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        console.log(radius);

        requestAnimationFrame(render);
    } 
}