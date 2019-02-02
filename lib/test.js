"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = require("pixi.js");
const key_1 = require("./game/key");
const config_1 = require("./config/config");
const character_1 = require("./game/character");
const fps_1 = require("./game/fps");
const app = new PIXI.Application(window.innerWidth, window.innerHeight);
var char;
var charList = [];
function init() {
    document.body.appendChild(app.view);
    textKeyPress.position.set(window.innerWidth - 60, window.innerHeight - 60);
    exports.textFPS.position.set(window.innerWidth - 60, window.innerHeight - 30);
    app.stage.addChild(textKeyPress);
    app.stage.addChild(exports.textFPS);
    fps_1.initFPS();
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
    textKeyPress.text = keyString;
}
exports.keyCheckRoutine = keyCheckRoutine;
function charMoveRoutine() {
    var moveX = key_1.key.keyRight ? config_1.config.playerVelocity :
        key_1.key.keyLeft ? -config_1.config.playerVelocity :
            0;
    var moveY = key_1.key.keyUp ? -config_1.config.playerVelocity :
        key_1.key.keyDown ? config_1.config.playerVelocity :
            0;
    char.move(moveX, moveY);
    char.update();
}
exports.charMoveRoutine = charMoveRoutine;
function initCharacter() {
    char = new character_1.Character(app, ["assets/character/smoooch_alsoyou-sprite.jpg"], 100);
    charList.push(char);
}
document.body.addEventListener("keydown", (e) => {
    key_1.key.Input.keyDownHandler(e.key);
    keyCheckRoutine();
});
document.body.addEventListener("keyup", (e) => {
    key_1.key.Input.keyUpHandler(e.key);
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
    textKeyPress.position.set(window.innerWidth - 60, window.innerHeight - 60);
    exports.textFPS.position.set(window.innerWidth - 60, window.innerHeight - 30);
});
var textKeyPress = new PIXI.Text('currentKey:', {
    fontFamily: 'Dosis',
    fontSize: 20,
    fill: 0xFFFFFF,
    align: 'right',
    wordWrap: true
});
exports.textFPS = new PIXI.Text(fps_1.currentFPS + 'fps', {
    fontFamily: 'Dosis',
    fontSize: 20,
    fill: 0xFFFFFF,
    align: 'right',
    wordWrap: true
});
init();
initCharacter();
