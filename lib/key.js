"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.key = {
    keyUp: false,
    keyDown: false,
    keyLeft: false,
    keyRight: false,
    keyZ: false,
    keyX: false,
    keyC: false,
    Input: {
        keyStatus: () => {
            console.debug(exports.key);
        },
        keyDownHandler: (keyString) => {
            switch (keyString) {
                case "ArrowUp":
                    exports.key.keyUp = true;
                    break;
                case "ArrowDown":
                    exports.key.keyDown = true;
                    break;
                case "ArrowLeft":
                    exports.key.keyLeft = true;
                    break;
                case "ArrowRight":
                    exports.key.keyRight = true;
                    break;
                case "z":
                    exports.key.keyZ = true;
                    break;
                case "x":
                    exports.key.keyX = true;
                    break;
                case "c":
                    exports.key.keyC = true;
                    break;
                default:
            }
        },
        keyUpHandler: (keyString) => {
            switch (keyString) {
                case "ArrowUp":
                    exports.key.keyUp = false;
                    break;
                case "ArrowDown":
                    exports.key.keyDown = false;
                    break;
                case "ArrowLeft":
                    exports.key.keyLeft = false;
                    break;
                case "ArrowRight":
                    exports.key.keyRight = false;
                    break;
                case "z":
                    exports.key.keyZ = false;
                    break;
                case "x":
                    exports.key.keyX = false;
                    break;
                case "c":
                    exports.key.keyC = false;
                    break;
                default:
            }
        }
    }
};
