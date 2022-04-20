'use strict'

function draw() {
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext){
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#309053';
        ctx.beginPath();
        ctx.moveTo(55, 20);
        ctx.lineTo(90, 85);
        ctx.lineTo(20, 85);
        ctx.closePath();
        ctx.fill();

        // круг
        let posXx = 620, posYy = 60;
        const circle = () => setInterval(function () {
            ctx.clearRect(580, 10, 400, 400);
            if (posXx + 50 <= 800 && posYy === 60) {
                posXx++;
            }
            if (posXx + 50 === 800 && posYy + 80 <= 200) {
                posYy++;
            }
            if (posXx >= 620 && posYy + 80 === 200) {
                posXx--;
            }
            if (posXx === 620 && posYy >= 60) {
                posYy--;
            }
            ctx.beginPath();
            ctx.arc(posXx, posYy, 25, 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
        }, 10);

        circle();


        // прямоугольник
        let posX = 500, posY = 450;
        const rectLong = () => setInterval(function () {
            ctx.clearRect(500, 450, 400, 400);
            if (posX + 50 <= 800 && posY === 450) {
                posX++;
            }
            if (posX + 120 === 800 && posY + 80 <= 600) {
                posY++;
            }
            if (posX >= 500 && posY + 80 === 600) {
                posX--;
            }
            if (posX === 500 && posY >= 450) {
                posY--;
            }
            ctx.fillRect(posX, posY, 100, 50);
        }, 10);

        rectLong();


        // четырехугольник
        let pos_x = 30, pos_y = 450;
        const rect = () => setInterval(function () {
            ctx.clearRect(30, 450, 300, 200);
            if (pos_x + 50 <= 200 && pos_y === 450) {
                pos_x++;
            }
            if (pos_x + 50 === 200 && pos_y + 50 <= 570) {
                pos_y++;
            }
            if (pos_x >= 30 && pos_y + 50 === 570) {
                pos_x--;
            }
            if (pos_x === 30 && pos_y >= 450) {
                pos_y--;
            }
            ctx.fillRect(pos_x, pos_y, 50, 50);
        }, 10);

        rect();

        ctx.fill();

    }
}

draw();
