class Game {
    constructor(initialStones) {
        this.movingStones = initialStones
        this.fixedStones = []
        this.reachedBottom  = false
        this.bottomPostition = []
    }
    setup() {
        let canvas = createCanvas(canvasWidth, canvasHeight);
        for (let i = 0; i < canvasFieldNumWidth; i++) {
            this.bottomPostition.push(canvasFieldNumHeight - 1)
        }
    }
    draw() {
        if (frameCount % initialSpped === 0) { 
            clear()
            this.drawGrid()
            this.drawAllStones()
            
            this.movingStones.forEach(stone => {  
                if (stone.y >= this.bottomPostition[stone.x]) {
                    this.reachedBottom = true
                }
            })
            if (!this.reachedBottom) {
                this.movingStones.forEach(stone => {
                    stone.y += 1
                })
            } else {
                // set all stones to fixed list
                this.movingStones.forEach(stone => {
                    this.fixedStones.push(stone)
                })
                this.movingStones = []
                // reset bottom list
                this.fixedStones.forEach(stone => {
                    this.bottomPostition[stone.x] = Math.min(this.bottomPostition[stone.x], stone.y - 1)
                })
                // initiate new stones & reset reached bottom
                this.reachedBottom = false
                let newFigure = createRandomFigure()
                newFigure.forEach(stone => { this.movingStones.push(stone) })
                //this.movingStones.push(new Stone)
                this.movingStones.forEach(stone => { stone.preload() })
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
    drawAllStones() {
        this.fixedStones.forEach(stone => { stone.draw() })
        this.movingStones.forEach(stone => { stone.draw() })
    }
}