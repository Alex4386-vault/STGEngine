"use strict";
/*
 * Welcome to Deprecated Stuff DUMPs
 * These are codes which are piece of garbage, but backing it up if i need to use it later on.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../test");
const config_1 = require("../config/config");
const key_1 = require("../game/key");
var currentFrame = 0;
var currentFPS = 0;
var lastFrameatSec = 0;
var FPSCheck = setInterval(() => {
    currentFPS = currentFrame - lastFrameatSec;
    lastFrameatSec = currentFrame;
}, 1000);
/**
 * Frame Limiter Stuff
 *  Primarily used as key checkups
 *  Handling as event for now
 */
var keyInputCheck = setInterval(() => {
    currentFrame++;
    let inputCheck = { currentFrame, key: key_1.key };
    inputCheck.currentFrame = currentFrame;
    test_1.keyCheckRoutine();
}, 1000 / config_1.config.FRAME_LIMIT);
/*
document.body.addEventListener("keydown", (e):void => {
    key.Input.keyDownHandler(e.key);
    keyCheckRoutine();
});

document.body.addEventListener("keyup", (e):void => {
    key.Input.keyUpHandler(e.key);
    keyCheckRoutine();
});
*/
