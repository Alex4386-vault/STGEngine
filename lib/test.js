"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const key_1 = require("./game/key");
const character_1 = require("./game/character");
const app = new PIXI.Application(window.innerWidth, window.innerHeight);
var char;
function init() {
    document.body.appendChild(app.view);
    textFPS.position.set(window.innerWidth - 60, window.innerHeight - 60);
    app.stage.addChild(textFPS);
}
/**
 * Main keyCheckRoutine.
 * Triggered when keyCheck
 */
function keyCheckRoutine() {
    let keyString = "";
    keyString += key_1.key.keyZ ? "Z" : "";
    keyString += key_1.key.keyX ? "X" : "";
    keyString += key_1.key.keyC ? "C" : "";
    keyString += key_1.key.keyUp ? "↑" : "";
    keyString += key_1.key.keyDown ? "↓" : "";
    keyString += key_1.key.keyLeft ? "←" : "";
    keyString += key_1.key.keyRight ? "→" : "";
    textFPS.text = keyString;
}
exports.keyCheckRoutine = keyCheckRoutine;
function initCharacter() {
    char = new character_1.Character(app, ["assets/character/smoooch_alsoyou-sprite.jpg"], 100);
}
window.addEventListener("resize", () => {
    //maybe I might be working on resizing stuff
    app.renderer.resize(window.innerWidth, window.innerHeight);
    textFPS.position.set(window.innerWidth - 60, window.innerHeight - 60);
});
document.body.addEventListener("keydown", (e) => {
    key_1.key.Input.keyDownHandler(e.key);
    keyCheckRoutine();
});
document.body.addEventListener("keyup", (e) => {
    key_1.key.Input.keyUpHandler(e.key);
    keyCheckRoutine();
});
document.body.addEventListener("focus", (e) => {
    if (!document.hasFocus()) {
        key_1.key.Input.allkeyUp();
        keyCheckRoutine();
    }
});
var checkGhostKey = setInterval(() => {
    if (!document.hasFocus()) {
        key_1.key.Input.allkeyUp();
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
