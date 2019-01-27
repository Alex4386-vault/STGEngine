"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const key_1 = require("./key");
const config_1 = require("./config");
const app = new PIXI.Application(784, 564);
var currentFrame = 0;
/* Debug Only */
var prevKey = key_1.key;
var keyInputCheck = setInterval(() => {
    currentFrame++;
    let inputCheck = { currentFrame, key: key_1.key };
    inputCheck.currentFrame = currentFrame;
    //key Checkup Routine
}, 1000 / config_1.config.FRAME_LIMIT);
var currentFPS = 0;
var lastFrameatSec = 0;
var FPSCheck = setInterval(() => {
    currentFPS = currentFrame - lastFrameatSec;
    lastFrameatSec = currentFrame;
    if (config_1.config.SHOW_FPS)
        textFPS.text = currentFPS + "fps";
}, 1000);
document.body.appendChild(app.view);
window.addEventListener("resize", () => {
    //maybe I might be working on resizing stuff
    app.renderer.resize(window.innerWidth, window.innerHeight);
});
document.body.addEventListener("keydown", (e) => {
    key_1.key.Input.keyDownHandler(e.key);
});
document.body.addEventListener("keyup", (e) => {
    key_1.key.Input.keyUpHandler(e.key);
});
var textFPS = new PIXI.Text(currentFPS + 'fps', {
    fontFamily: 'Dosis',
    fontSize: 20,
    fill: 0xFFFFFF,
    align: 'right',
    wordWrap: true
});
textFPS.position.set(window.innerWidth - 60, window.innerHeight - 30);
app.stage.addChild(textFPS);
