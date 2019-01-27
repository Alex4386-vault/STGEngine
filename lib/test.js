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
    if (prevKey !== key_1.key) {
        console.log(key_1.key);
    }
    console.debug(inputCheck);
    prevKey = key_1.key;
}, 1000 / config_1.config.FRAME_LIMIT);
var currentFPS = 0;
var lastFrameatSec = 0;
var FPSCheck = setInterval(() => {
    currentFPS = currentFrame - lastFrameatSec;
    console.log(currentFPS + "fps");
    lastFrameatSec = currentFrame;
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
