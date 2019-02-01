import * as PIXI from 'pixi.js';
import { key } from './game/key';
import { config } from './config/config';
import { Character } from './game/character';

const app: PIXI.Application = new PIXI.Application(window.innerWidth, window.innerHeight);
var char: Character;

function init() {
    document.body.appendChild(app.view);
    textFPS.position.set(window.innerWidth-60,window.innerHeight-60);
    app.stage.addChild(textFPS);
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
    textFPS.text = keyString;
}

function initCharacter() {
    char = new Character(app, ["assets/character/smoooch_alsoyou-sprite.jpg"], 100);
    
}

window.addEventListener("resize", () => {
    //maybe I might be working on resizing stuff
    app.renderer.resize(window.innerWidth, window.innerHeight);
    textFPS.position.set(window.innerWidth-60,window.innerHeight-60);
});

document.body.addEventListener("keydown", (e):void => {
    key.Input.keyDownHandler(e.key);
    keyCheckRoutine();
});

document.body.addEventListener("keyup", (e):void => {
    key.Input.keyUpHandler(e.key);
    keyCheckRoutine();
});

document.body.addEventListener("focus", (e):void => {
    if (!document.hasFocus()) {
        key.Input.allkeyUp();
        keyCheckRoutine();
    }
});

var checkGhostKey = setInterval(() => {
    if (!document.hasFocus()) {
        key.Input.allkeyUp();
        keyCheckRoutine();
    }
}, 1000);

var textFPS = new PIXI.Text('currentKey:', {
    fontFamily: 'Dosis',
    fontSize: 20,
    fill: 0xFFFFFF,
    align: 'right',
    wordWrap: true
});

init();
initCharacter();