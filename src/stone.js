class Stone {
    constructor(x = 5, y = - 1, isMoving = true) {
        this.image
        this.x = x
        this.y = y
        this.isMoving = isMoving
    }
    preload() {
        this.image = loadImage('/assets/red_square.svg')
    }
    draw() {
        image(this.image, this.x * canvasSquareLength, this.y * canvasSquareLength, canvasSquareLength, canvasSquareLength)
        console.log([this.x, this.y])
    }
}