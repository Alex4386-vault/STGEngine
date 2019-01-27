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
    //key Checkup Routine

    let keyHold = "";
    keyHold += key.keyUp ? "UP ":"";
    keyHold += key.keyDown ? "DOWN ":"";
    keyHold += key.keyLeft ? "LEFT ":"";
    keyHold += key.keyRight ? "RIGHT ":"";
    keyHold += key.keyZ ? "Z ":"";
    keyHold += key.keyX ? "X ":"";
    keyHold += key.keyC ? "C ":"";
    keyHold += "\n";
    if (config.SHOW_FPS) textFPS.text = keyHold+currentFPS+"fps";
}, 1000/config.FRAME_LIMIT);

var currentFPS = 0;
var lastFrameatSec = 0;

var FPSCheck = setInterval( () => {
    currentFPS = currentFrame - lastFrameatSec;
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


var textFPS = new PIXI.Text(currentFPS+'fps', {
    fontFamily: 'Dosis',
    fontSize: 20,
    fill: 0xFFFFFF,
    align: 'right',
    wordWrap: true
});

textFPS.position.set(window.innerWidth-60,window.innerHeight-60);
app.stage.addChild(textFPS);