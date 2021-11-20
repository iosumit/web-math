window.onload= function () {
    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    context.translate(0, height / 2);
    context.scale(1, -1);

    for (let angle = 0; angle < Math.PI * 2; angle+=0.01) {

        //Angle Goes to 0 - 6.28 (2 pi)
        // console.log(angle);
        let x = angle * 100,
            y = Math.sin(angle) * 100;
        
        // X -> 0 - 628
        console.log(x, y);
        
        context.fillRect(x, 2, 2, 2);
        context.fillRect(x, y, 2, 2);
    }
}