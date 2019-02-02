/*
 * Welcome to Deprecated Stuff DUMPs
 * These are codes which are piece of garbage, but backing it up if i need to use it later on.
 */

 import { keyCheckRoutine } from '../test';
 import { config } from '../config/config';
 import { key } from '../game/key';

var currentFrame = 0;

var currentFPS = 0;
var lastFrameatSec = 0;

var FPSCheck = setInterval( () => {
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
    let inputCheck = {currentFrame,key};
    inputCheck.currentFrame = currentFrame;
    keyCheckRoutine();
}, 1000/config.FRAME_LIMIT);

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
