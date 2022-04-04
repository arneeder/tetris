class Game {
    constructor() {
        this.stones = [new Stone]
        this.fixedStones = 0
        this.bottomPostition = []
    }
    setup() {
        let canvas = createCanvas(canvasWidth, canvasHeight);
        for (let i = 0; i < canvasFieldNumWidth; i++) {
            this.bottomPostition.push(canvasHeight - canvasSquareLength)
        }
    }
    draw() {
        if (frameCount % initialSpped === 0) {
            clear()
            this.drawGrid()
            this.stones.forEach(stone => {
                
                if (stone.y < this.bottomPostition[stone.x]) {
                    stone.y += canvasSquareLength
                } else if (stone.isMoving === true) {
                    stone.isMoving = false
                    console.log('bottomPostion before: ' + this.bottomPostition[ stone.x ])
                    this.bottomPostition[ stone.x ] -= canvasSquareLength
                    console.log('bottomPostion after: ' + this.bottomPostition[ stone.x ])
                }
                
                stone.draw()

            })
            if (this.fixedStones !== this.stones.filter(el => { return el.isMoving === false }).length) {
                this.fixedStones = this.stones.length
                this.stones.push(new Stone)
                this.stones.forEach(stone => { stone.preload() })
                console.log('isMoving false - statement was executed')
            } 
        }
    }
    drawGrid() {
        // DRAW FRAME
        strokeWeight(2)
        line(0,0,canvasWidth,0)
        line(0,canvasHeight,canvasWidth,canvasHeight)
        line(0,0,0,canvasHeight)
        line(canvasWidth,0,canvasWidth,canvasHeight)
        // REDUCE LINE SIZE FOR INNER LINES
        strokeWeight(0.1)
        // DRAW HOIZONTAL LINES
        for (let i = 1; i < canvasFieldNumHeight; i++) {
            line(0, i * canvasSquareLength,canvasWidth, i * canvasSquareLength)
        }
        for (let j = 1; j < canvasFieldNumWidth; j++) {
            line(j * canvasSquareLength, 0, j * canvasSquareLength, canvasHeight)
        }
    }
}