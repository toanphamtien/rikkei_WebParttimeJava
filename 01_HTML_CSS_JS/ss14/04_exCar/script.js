const GAME_WIDTH = window.innerWidth - 50;
const GAME_HEIGHT = window.innerHeight - 50;
const CAR_SIZE = 50; // width = 50, height = 50
const ITEM_SIZE = 30;
const ITEM_NUM = 10;
const MARGIN = 10;
const KEY_CODE = {
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    CTRL: 17
};

const MY_CANVAS = document.getElementById("myCanvas");
MY_CANVAS.width = GAME_WIDTH;
MY_CANVAS.height = GAME_HEIGHT;
const CTX = MY_CANVAS.getContext("2d");
CTX.font = "20px Arial";

function Car() {
    this.img = new Image();
    this.img.src = "car.png";
    this.width = CAR_SIZE;
    this.height = CAR_SIZE;
    // vi tri cua xe
    //  A-------B
    //  |       |
    //  |   O >>>>>>>
    //  |       |
    //  D-------C
    this.Ox = GAME_WIDTH / 2;
    this.Oy = GAME_HEIGHT / 2;
    this.Ax = this.Ox - this.width / 2;
    this.Ay = this.Oy - this.height / 2;
    this.Bx = this.Ox + this.width / 2;
    this.By = this.Oy - this.height / 2;
    this.Cx = this.Ox + this.width / 2;
    this.Cy = this.Oy + this.height / 2;
    this.Dx = this.Ox - this.width / 2;
    this.Dy = this.Oy + this.height / 2;
    this.angle = -Math.PI / 2;
    // toc do cua xe
    this.speed = 0;
    this.maxSpeed = 10;
    this.minSpeed = -5;
    this.acceleration = 0.1;
    this.rotationAngle = Math.PI / 180 * 5;
}

Car.prototype.draw = function (canvasContext) {
    canvasContext.save();
    canvasContext.translate(this.Ox, this.Oy);
    canvasContext.rotate(this.angle);
    canvasContext.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
    canvasContext.restore();
}

Car.prototype.update = function () {
    let cos = Math.cos(this.angle);
    let sin = Math.sin(this.angle);

    if (this.speed != 0) {
        this.Ox = this.Ox + cos * this.speed;
        this.Oy = this.Oy + sin * this.speed;
    }

    this.Ax = Math.floor(this.Ox + cos * (-this.width / 2) - sin * (-this.height / 2));
    this.Ay = Math.floor(this.Oy + sin * (-this.width / 2) + cos * (-this.height / 2));
    this.Bx = Math.floor(this.Ox + cos * (this.width / 2) - sin * (-this.height / 2));
    this.By = Math.floor(this.Oy + sin * (this.width / 2) + cos * (-this.height / 2));
    this.Cx = Math.floor(this.Ox + cos * (this.width / 2) - sin * (this.height / 2));
    this.Cy = Math.floor(this.Oy + sin * (this.width / 2) + cos * (this.height / 2));
    this.Dx = Math.floor(this.Ox + cos * (-this.width / 2) - sin * (this.height / 2));
    this.Dy = Math.floor(this.Oy + sin * (-this.width / 2) + cos * (this.height / 2));
}

Car.prototype.event = function (keyList) {
    if (keyList[KEY_CODE.CTRL] == true) {

    }
    if (keyList[KEY_CODE.UP_ARROW] == true) {
        // console.log("UP_ARROW down");
        this.speed = this.speed + this.acceleration;
        if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    }
    if (keyList[KEY_CODE.DOWN_ARROW] == true) {
        // console.log("DOWN_ARROW down");
        this.speed = this.speed - this.acceleration;
        if (this.speed < this.minSpeed) this.speed = this.minSpeed;
    }

    if (keyList[KEY_CODE.UP_ARROW] == false && keyList[KEY_CODE.DOWN_ARROW] == false) {
        this.speed = 0;
    }

    if (keyList[KEY_CODE.LEFT_ARROW] == true && this.speed != 0) {
        // console.log("LEFT_ARROW down");
        this.angle = this.angle - this.rotationAngle;
    }
    if (keyList[KEY_CODE.RIGHT_ARROW] == true && this.speed != 0) {
        // console.log("RIGHT_ARROW down");
        this.angle = this.angle + this.rotationAngle;
    }

    this.angle = this.angle % (2 * Math.PI);

    // 
    if (this.Ax < 0 || this.Bx < 0 || this.Cx < 0 || this.Dx < 0) {
        this.Ax += MARGIN;
        this.Bx += MARGIN;
        this.Cx += MARGIN;
        this.Dx += MARGIN;
        this.Ox += MARGIN;
    }
    if (this.Ax > GAME_WIDTH || this.Bx > GAME_WIDTH || this.Cx > GAME_WIDTH || this.Dx > GAME_WIDTH) {
        this.Ax -= MARGIN;
        this.Bx -= MARGIN;
        this.Cx -= MARGIN;
        this.Dx -= MARGIN;
        this.Ox -= MARGIN;
    }
    if (this.Ay < 0 || this.By < 0 || this.Cy < 0 || this.Dy < 0) {
        this.Ay += MARGIN;
        this.By += MARGIN;
        this.Cy += MARGIN;
        this.Dy += MARGIN;
        this.Oy += MARGIN;
    }
    if (this.Ay > GAME_HEIGHT || this.By > GAME_HEIGHT || this.Cy > GAME_HEIGHT || this.Dy > GAME_HEIGHT) {
        this.Ay -= MARGIN;
        this.By -= MARGIN;
        this.Cy -= MARGIN;
        this.Dy -= MARGIN;
        this.Oy -= MARGIN;
    }

}

Car.prototype.collision = function (x, y) {
    let tempX = [this.Ax, this.Bx, this.Cx, this.Dx];
    let tempY = [this.Ay, this.By, this.Cy, this.Dy];

    tempX.sort();
    tempY.sort();

    if ((x > tempX[0] && x < tempX[3]) && (y > tempY[0] && y < tempY[3])) {
        return true;
    }
    else {
        return false;
    }

}

function Bomb() {
    this.img = new Image();
    this.img.src = "bomb.png";
    this.Ox = 50 + Math.floor(Math.random() * (GAME_WIDTH - 50));
    this.Oy = 50 + Math.floor(Math.random() * (GAME_HEIGHT - 50));
    this.width = ITEM_SIZE;
    this.height = ITEM_SIZE;
}

Bomb.prototype.draw = function (canvasContext) {
    canvasContext.drawImage(this.img, this.Ox - this.width / 2, this.Oy - this.height / 2, this.width, this.height);
}

Bomb.prototype.explosive = function () {
    this.img.src = "lose.png";
}

function Money() {
    this.img = new Image();
    this.img.src = "money.png";
    this.Ox = 20 + Math.floor(Math.random() * (GAME_WIDTH - 20));
    this.Oy = 20 + Math.floor(Math.random() * (GAME_HEIGHT - 20));
    this.width = ITEM_SIZE;
    this.height = ITEM_SIZE;
}

Money.prototype.draw = function (canvasContext) {
    canvasContext.drawImage(this.img, this.Ox - this.width / 2, this.Oy - this.height / 2, this.width, this.height);
}

/* -------------------------------------------------------- */
let car = new Car();
let keyList = [];
let bomb = [];
let money = [];
let point = 0;
let isRunGame = true;
let msg = "";

function init() {
    // console.log("init")
    for (let i = 0; i < 50; i++) {
        keyList.push(false);
    }

    for (let i = 0; i < ITEM_NUM; i++) {
        bomb.push(new Bomb());
        money.push(new Money());
    }

    window.addEventListener("keydown", function (e) {
        if (e.keyCode == KEY_CODE.UP_ARROW) keyList[KEY_CODE.UP_ARROW] = true;
        if (e.keyCode == KEY_CODE.DOWN_ARROW) keyList[KEY_CODE.DOWN_ARROW] = true;
        if (e.keyCode == KEY_CODE.LEFT_ARROW) keyList[KEY_CODE.LEFT_ARROW] = true;
        if (e.keyCode == KEY_CODE.RIGHT_ARROW) keyList[KEY_CODE.RIGHT_ARROW] = true;
    });

    window.addEventListener("keyup", function (e) {
        if (e.keyCode == KEY_CODE.UP_ARROW) keyList[KEY_CODE.UP_ARROW] = false;
        if (e.keyCode == KEY_CODE.DOWN_ARROW) keyList[KEY_CODE.DOWN_ARROW] = false;
        if (e.keyCode == KEY_CODE.LEFT_ARROW) keyList[KEY_CODE.LEFT_ARROW] = false;
        if (e.keyCode == KEY_CODE.RIGHT_ARROW) keyList[KEY_CODE.RIGHT_ARROW] = false;
    });
}

function clear() {
    // console.log("clear");
    CTX.clearRect(0, 0, MY_CANVAS.width, MY_CANVAS.height);
}

function checkCollision() {
    for (let i = 0; i < money.length; i++) {
        if (car.collision(money[i].Ox, money[i].Oy)) {
            console.log("Money Money");
            money.splice(i, 1);
            point += 10;
            break;
        }
    }
    if (money.length == 0) isRunGame= false; //Win game

    for (let i = 0; i < bomb.length; i++) {
        if (car.collision(bomb[i].Ox, bomb[i].Oy)) {
            console.log("Bomb Bomb");
            bomb[i].explosive();
            isRunGame = false; // lose game
            break;
        }
    }
}

function update() {
    // console.log("update");
    car.event(keyList);
    car.update();
    checkCollision();
}

function draw() {
    // console.log("draw");
    for (let i = 0; i < bomb.length; i++) {
        bomb[i].draw(CTX);
    }
    for (let i = 0; i < money.length; i++) {
        money[i].draw(CTX);
    }
    car.draw(CTX);

    // show msg
    if(isRunGame){
        msg = "point: " + point;
        CTX.fillText(msg, 50, 50);
    }
    else{
        if (money.length == 0) msg = "You Win";
        else msg = "You Lose";
        CTX.font = "50px Arial";
        CTX.fillText(msg, GAME_WIDTH/2 - 100, GAME_HEIGHT/2-25);
    }
}

function runGame() {
    if (isRunGame) {
        clear();
        update();
        draw();
    }
    else {
        clear();
        draw();
    }
}

init();
setInterval(runGame, 1000 / 50);
