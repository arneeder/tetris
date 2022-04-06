class Bunny {
    constructor() {
        this.image
        this.x = 0
        this.y = 30
    }
    preload() {
        this.image = loadImage('/assets/easter-bunny.gif')
    }
    setup() {
        let canvas = createCanvas(displayWidth, displayHeight);
    }
    draw() {
        console.log('test bunny')
        image(this.image, this.x, this.y, 50, 50)
        this.x += 1
    }
}