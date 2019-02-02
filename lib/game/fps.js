"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
const test_1 = require("../test");
var currentFrame = 0;
exports.currentFPS = 0;
var lastFrameatSec = 0;
function initFPS() {
    var keyInputCheck = setInterval(() => {
        currentFrame++;
        test_1.charMoveRoutine();
        test_1.keyCheckRoutine();
    }, 1000 / config_1.config.FRAME_LIMIT);
    var FPSCheck = setInterval(() => {
        exports.currentFPS = currentFrame - lastFrameatSec;
        lastFrameatSec = currentFrame;
        test_1.textFPS.text = exports.currentFPS + 'fps';
    }, 1000);
}
exports.initFPS = initFPS;
