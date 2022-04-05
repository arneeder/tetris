const initialFigureArray = createRandomFigure()
const initialFigure = initialFigureArray.slice(1)
const initialFigureType = initialFigureArray[0]

const game = new Game(initialFigure, initialFigureType);

function preload() {
    game.fixedStones.forEach(stone => { stone.preload() })
    game.movingStones.forEach(stone => { stone.preload() })
}

function setup() {
    game.setup()
}

function draw() {
    if(game.isGameOver()) {
        console.log('GAME OVER')
    } else {
        game.draw()
    } 
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) { game.moveFigureLeft() }
    if (keyCode === RIGHT_ARROW) { game.moveFigureRight() }
    if (keyCode === DOWN_ARROW) { game.moveFigureDown() }
    if (keyCode === UP_ARROW) {  game.turnFigure() }
}