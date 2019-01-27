export const key = {
    keyUp:false,
    keyDown:false,
    keyLeft:false,
    keyRight:false,
    keyZ:false,
    keyX:false,
    keyC:false,
    Input: {
        keyStatus: () => {
            console.debug(key);
        },
        keyDownHandler: (keyString: string|null) => {
            switch(keyString) {
                case "ArrowUp":
                    key.keyUp = true;
                    break;
                case "ArrowDown":
                    key.keyDown = true;
                    break;
                case "ArrowLeft":
                    key.keyLeft = true;
                    break;
                case "ArrowRight":
                    key.keyRight = true;
                    break;
                case "z":
                    key.keyZ = true;
                    break;
                case "x":
                    key.keyX = true;
                    break;
                case "c":
                    key.keyC = true;
                    break;
                default:
            }
        },
        keyUpHandler: (keyString: string|null) => {
            switch(keyString) {
                case "ArrowUp":
                    key.keyUp = false;
                    break;
                case "ArrowDown":
                    key.keyDown = false;
                    break;
                case "ArrowLeft":
                    key.keyLeft = false;
                    break;
                case "ArrowRight":
                    key.keyRight = false;
                    break;
                case "z":
                    key.keyZ = false;
                    break;
                case "x":
                    key.keyX = false;
                    break;
                case "c":
                    key.keyC = false;
                    break;
                default:
            }
        }
    }
};