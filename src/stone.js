class Stone {
    constructor(x = 5, y = - canvasSquareLength, isMoving = true) {
        this.image
        this.x = x
        this.y = y
        this.isMoving = isMoving
    }
    preload() {
        this.image = loadImage('red_square.svg')
    }
    draw() {
        image(this.image, this.x * canvasSquareLength, this.y, canvasSquareLength, canvasSquareLength)
    }
}