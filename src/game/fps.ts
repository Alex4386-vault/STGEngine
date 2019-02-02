import { config } from '../config/config';
import { key } from './key';
import { keyCheckRoutine, textFPS, charMoveRoutine } from '../test';

var currentFrame = 0;

export var currentFPS = 0;
var lastFrameatSec = 0;

export function initFPS() {
    var keyInputCheck = setInterval(() => {
        currentFrame++;
        charMoveRoutine();
        keyCheckRoutine();
    }, 1000/config.FRAME_LIMIT);
    var FPSCheck = setInterval( () => {
        currentFPS = currentFrame - lastFrameatSec;
        lastFrameatSec = currentFrame;
        textFPS.text = currentFPS+'fps';
    }, 1000);
}

