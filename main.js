window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    // context.translate(0, height / 2);
    // context.scale(1, -1);

    let centerY = height * .5,
        centerX = width * .5,
        offset = height * .4,
        speed = 0.1,
        angle = 0;

    render();

    function render() {
        var y = centerY + Math.sin(angle) * offset; //( y is repeatitive value up and down)

        context.clearRect(0, 0, width, height); // Clearing the canvas
        context.beginPath();

        context.arc(centerX, y, 50,  0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        console.log(y);

        requestAnimationFrame(render);
    } 
}