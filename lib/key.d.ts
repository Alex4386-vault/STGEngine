export declare const key: {
    keyUp: boolean;
    keyDown: boolean;
    keyLeft: boolean;
    keyRight: boolean;
    keyZ: boolean;
    keyX: boolean;
    keyC: boolean;
    Input: {
        keyStatus: () => void;
        keyDownHandler: (keyString: string | null) => void;
        keyUpHandler: (keyString: string | null) => void;
    };
};
