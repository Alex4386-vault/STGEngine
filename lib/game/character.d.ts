/// <reference types="pixi.js" />
export declare class Character {
    app: PIXI.Application;
    x: number;
    y: number;
    private width;
    private height;
    moving: boolean;
    private spriteImageList;
    private sprite;
    /**
     * Create Character.
     *
     * @param app The Application of the Game: usually app.Application
     * @param spriteImageList Array of image locations
     * @param width width of sprite
     * @param height height of sprite (optional. if undefined, width will be the height)
     * @param x x location of the character (optional. if undefined, it will automatically located in center)
     * @param y y location of the character (optional. if undefined, it will automatically located in center)
     */
    constructor(app: PIXI.Application, spriteImageList: string[], width: number, height?: number, x?: number, y?: number);
    update(): void;
    /**
     * Move Character from current location
     * @param x  move character amount of x
     * @param y  move character amount of y
     */
    move(x: number, y: number): void;
}
