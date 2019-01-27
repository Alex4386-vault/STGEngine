import * as PIXI from 'pixi.js';
import { key } from './key';
import { config } from './config';

const app = new PIXI.Application(784,564);

var currentFrame = 0;

/* Debug Only */
var prevKey = key;

var keyInputCheck = setInterval(() => {
    currentFrame++;
    let inputCheck = {currentFrame,key};
    inputCheck.currentFrame = currentFrame;
    if (prevKey !== key) {
        console.log(key);
    }
    console.debug(inputCheck);
    prevKey = key;
}, 1000/config.FRAME_LIMIT);

var currentFPS = 0;
var lastFrameatSec = 0;

var FPSCheck = setInterval( () => {
    currentFPS = currentFrame - lastFrameatSec;
    console.log(currentFPS+"fps");
    lastFrameatSec = currentFrame;
}, 1000)

document.body.appendChild(app.view);

window.addEventListener("resize", () => {
    //maybe I might be working on resizing stuff
    app.renderer.resize(window.innerWidth, window.innerHeight);
});

document.body.addEventListener("keydown", (e) => {
    key.Input.keyDownHandler(e.key);
});

document.body.addEventListener("keyup", (e) => {
    key.Input.keyUpHandler(e.key);
});
