class Game {
    constructor(initialStones) {
        this.movingStones = initialStones
        this.fixedStones = []
        
        this.outerBorder = []
        this.occupiedFields = []
    }
    setup() {
        let canvas = createCanvas(canvasWidth, canvasHeight);

        for (let i = 0; i < canvasFieldNumHeight; i++) {
            this.outerBorder.push({x: -1, y: i})
            this.outerBorder.push({x: canvasFieldNumWidth, y: i})
        }
        for (let i = 0; i < canvasFieldNumWidth; i++) {
            this.outerBorder.push({x: i, y: canvasFieldNumHeight})
        }
        this.occupiedFields = [...this.outerBorder]
    }
    draw() {
        if (frameCount % initialSpped === 0) { 
            clear()
            this.drawGrid()
            this.drawAllStones()
            

            if (!this.detectCollision(0, 0, 1)) {
                this.movingStones.forEach(stone => {
                    stone.y += 1
                })
            } else {
                // set all stones to fixed list
                this.movingStones.forEach(stone => {
                    this.fixedStones.push(stone)
                })
                this.movingStones = []

                // add to occupiedFields
                this.occupiedFields = [...this.outerBorder]
                this.fixedStones.forEach(stone => {
                    this.occupiedFields.push({x: stone.x, y: stone.y})
                })
                // initiate new stones
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

    moveFigureLeft() {
        // move left, if no collision detected
        if (!this.detectCollision(1, 0, 0)) {
            this.movingStones.forEach(stone => {
            stone.x--
            })
        }
    }
    moveFigureRight() {
        // move left, if no collision detected
        if (!this.detectCollision(0, 1, 0)) {
            this.movingStones.forEach(stone => {
            stone.x++
            })
        }
    }
    moveFigureDown() {
        // find current left border of figure
        const lowerBorder = this.movingStones.reduce(function(acc, val) {
            return Math.max(acc, val.y)
        }, 0)
        // move left, if still in canvas
        if (lowerBorder < canvasFieldNumHeight - 1) {
            this.movingStones.forEach(stone => {
            stone.y++
            })
        }
    }

    detectCollision(left, right, bottom) {
        let numCollisions = 0
        this.movingStones.forEach(stone => {
            const collisionStoneOccupied = this.occupiedFields.map(function(occupiedField) {
                return (occupiedField.x === stone.x - left || occupiedField.x === stone.x + right) && occupiedField.y === stone.y + bottom
            })
            collisionStoneOccupied.forEach(potentialCollision => {
                if(potentialCollision) {
                    numCollisions += 1
                }
            })
        })
        if (numCollisions > 0) return true
        else return false
    }
}