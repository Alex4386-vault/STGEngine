import * as PIXI from 'pixi.js';
import { key } from './game/key';
import { config } from './config/config';
import { Character } from './game/character';
import { currentFPS, initFPS } from './game/fps';

const app: PIXI.Application = new PIXI.Application(window.innerWidth, window.innerHeight);
var char: Character;
var charList: Character[] = [];

function init() {
    document.body.appendChild(app.view);
    textKeyPress.position.set(window.innerWidth-60,window.innerHeight-60);
    textFPS.position.set(window.innerWidth-60,window.innerHeight-30);
    app.stage.addChild(textKeyPress);
    app.stage.addChild(textFPS);
    initFPS();
}

/**
 * Main keyCheckRoutine.
 * Triggered when keyCheck
 */
export function keyCheckRoutine():void {
    let keyString: string = "";
    keyString += key.keyZ ? "Z":"";
    keyString += key.keyX ? "X":"";
    keyString += key.keyC ? "C":"";
    keyString += key.keyUp ? "↑":"";
    keyString += key.keyDown ? "↓":"";
    keyString += key.keyLeft ? "←":"";
    keyString += key.keyRight ? "→":"";
    textKeyPress.text = keyString;
}

export function charMoveRoutine():void {

    var moveX:number
      = key.keyLeft && key.keyRight ? 0 : 
        key.keyRight ? config.playerVelocity :
        key.keyLeft ? -config.playerVelocity :
        0;
    var moveY:number
      = key.keyUp && key.keyDown ? 0 :
        key.keyUp ? -config.playerVelocity :
        key.keyDown ? config.playerVelocity :
        0;

    char.move(moveX, moveY);
    char.update();
}

function initCharacter() {
    char = new Character(app, ["assets/character/smoooch_alsoyou-sprite.jpg"], 100);
    charList.push(char);
}

document.body.addEventListener("keydown", (e):void => {
    key.Input.keyDownHandler(e.key);
    keyCheckRoutine();
});

document.body.addEventListener("keyup", (e):void => {
    key.Input.keyUpHandler(e.key);
    keyCheckRoutine();
});
window.addEventListener("resize", () => {
    //maybe I might be working on resizing stuff
    charList.forEach((mychar) => {
        mychar.x = (mychar.x / app.view.width) * window.innerWidth;
        mychar.y = (mychar.y / app.view.height) * window.innerHeight;
        mychar.update(); 
    });
    app.renderer.resize(window.innerWidth, window.innerHeight);
    textKeyPress.position.set(window.innerWidth-60,window.innerHeight-60);
    textFPS.position.set(window.innerWidth-60,window.innerHeight-30);
});

var textKeyPress = new PIXI.Text('currentKey:', {
    fontFamily: 'Dosis',
    fontSize: 20,
    fill: 0xFFFFFF,
    align: 'right',
    wordWrap: true
});
export var textFPS = new PIXI.Text(currentFPS+'fps', {
    fontFamily: 'Dosis',
    fontSize: 20,
    fill: 0xFFFFFF,
    align: 'right',
    wordWrap: true
});

init();
initCharacter();