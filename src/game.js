class Game {
    constructor(initialFigure, initialFigureType) {
        this.movingStones = initialFigure
        this.fixedStones = []
        
        this.outerBorder = []
        this.occupiedFields = []

        this.figureType = initialFigureType
        this.figurePosition = 0

        this.score = 4
        this.level = 1
        this.speed = initialSpeed
        
        this.song
        this.gameOverSound
    }
    preload() {
        this.song = loadSound('../assets/theme-melody.mp3')
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
        if (frameCount % this.speed === 0) { 
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
                this.setOccupiedFields()
                // check if a line is completed, if so: remove it and adjust all stones above
                const completeRows = this.detectCompleteRows()
                if (completeRows.length > 0) {
                    this.fixedStones.filter(stone => !completeRows.includes(stone.y))
                    this.adjustUpperRows(completeRows)
                    this.setOccupiedFields()
                }

                // initiate new stones
                this.figurePosition = 0
                let newFigureArray = createRandomFigure()
                let newFigure = newFigureArray.slice(1)
                this.figureType = newFigureArray[0]
                newFigure.forEach(stone => { this.movingStones.push(stone) })
                //this.movingStones.push(new Stone)
                this.movingStones.forEach(stone => { stone.preload() })
                this.score += 4
                this.level = Math.ceil(this.score / 40)
                this.speed = Math.max(initialSpeed - (2 * this.level), 10)
                document.getElementById('score').innerHTML = this.score
                document.getElementById('level').innerHTML = this.level
            }
        }
    }
    
    drawGrid() {
        // DRAW FRAME
        background('#F3F08D')
        stroke('#F79A96')
        strokeWeight(5)
        line(0,0,canvasWidth,0)
        line(0,canvasHeight,canvasWidth,canvasHeight)
        line(0,0,0,canvasHeight)
        line(canvasWidth,0,canvasWidth,canvasHeight)
        // REDUCE LINE SIZE FOR INNER LINES
        strokeWeight(2)
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
        // move right, if no collision detected
        if (!this.detectCollision(0, 1, 0)) {
            this.movingStones.forEach(stone => {
            stone.x++
            })
        }
    }
    moveFigureDown() {
        // find current left border of figure
        if (!this.detectCollision(0, 0, 1)) {
            this.movingStones.forEach(stone => {
            stone.y++
            })
        }
    }
    turnFigure() {
        switch (this.figureType) {
            case 'lineFigure':
                turnLineFigure(this.movingStones, this.figurePosition);
                this.figurePosition = (this.figurePosition + 1) % 4;
                break;
            case 'squareFigure':
                turnSquareFigure(this.movingStones, this.figurePosition);
                this.figurePosition = (this.figurePosition + 1) % 4;
                break;
            case 'tFigure':
                turnTFigure(this.movingStones, this.figurePosition);
                this.figurePosition = (this.figurePosition + 1) % 4;
                break;
            case 'lFigureLeft':
                turnLFigureLeft(this.movingStones, this.figurePosition);
                this.figurePosition = (this.figurePosition + 1) % 4;
                break;
            case 'lFigureRight':
                turnLFigureRight(this.movingStones, this.figurePosition);
                this.figurePosition = (this.figurePosition + 1) % 4;
                break;
            case 'jaggedFigureLeft':
                turnJaggedFigureLeft(this.movingStones, this.figurePosition);
                this.figurePosition = (this.figurePosition + 1) % 4;
                break;
            case 'jaggedFigureRight':
                turnJaggedFigureRight(this.movingStones, this.figurePosition);
                this.figurePosition = (this.figurePosition + 1) % 4;
                break;                       
        }
    }

    setOccupiedFields() {
        this.occupiedFields = []
        this.occupiedFields = [...this.outerBorder]
        this.fixedStones.forEach(stone => {
            this.occupiedFields.push({x: stone.x, y: stone.y})
        })
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

    detectCompleteRows() {

        const completeRows = []
        for (let i = 0; i < canvasFieldNumHeight; i++) {
            let countStonesPerRow = 0
            this.fixedStones.forEach(stone => {
                if (stone.y === i) countStonesPerRow++
            })
            if (countStonesPerRow === canvasFieldNumWidth) {
                completeRows.push(i+1)
            }
        }
        return completeRows
    }

adjustUpperRows(arr) {
    for (let completeRowNumber of arr) {
        this.fixedStones.map(function(stone) {
            if (stone.y < completeRowNumber) {
                stone.y++
            }
        })
    }
}
isGameOver() {
    if(this.fixedStones.length > 0) {
        let maxHeight = this.fixedStones.reduce(function(acc, val) {
            return Math.min(acc, val.y)
        }, canvasFieldNumHeight)
        return maxHeight <= 0
    }
}
}