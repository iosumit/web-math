window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        radius = 200,
        angle = 0, 
        speed = 0.01,
        numObject = 20,
        slice = Math.PI * 2 / numObject,   // Radian between 2 Obj
        x, y;

    

    for (let i = 0; i < numObject; i++) {
        angle = i * slice;   // Calculating the radian of obj
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;

        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
        console.log(angle);
    }
}