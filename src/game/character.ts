export class Character {
    public app: PIXI.Application;
    public x: number;
    public y: number;
    private width: number;
    private height: number;
    private spriteImageList: string[];

    private sprite: PIXI.Sprite;

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
    constructor(app: PIXI.Application, spriteImageList: string[], width: number, height?: number, x?: number, y?: number ) {
        this.app = app;
        this.x = x === undefined ? app.view.width/2 : x;
        this.y = y === undefined ? app.view.height/2 : y;
        this.sprite = PIXI.Sprite.fromImage(spriteImageList[0]);
        this.spriteImageList = spriteImageList;
        this.width = width;
        this.height = height !== undefined ? height : width;
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.position.x = this.x;
        this.sprite.position.y = this.y;
        this.sprite.anchor.x = this.sprite.anchor.y = 0.5;
        app.stage.addChild(this.sprite);
        console.log("created character",this);
    }

    update() {
        this.sprite.position.x = this.x;
        this.sprite.position.y = this.y;
    }


    
}