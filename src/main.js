const figure = createRandomFigure()

const game = new Game(figure);

function preload() {
    game.fixedStones.forEach(stone => { stone.preload() })
    game.movingStones.forEach(stone => { stone.preload() })
}

function setup() {
    game.setup()
}

function draw() {
    game.draw()
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) { game.moveFigureLeft() }
    if (keyCode === RIGHT_ARROW) { game.moveFigureRight() }
    if (keyCode === DOWN_ARROW) { game.moveFigureDown() }
    // if (keyCode === UP_ARROW) { game.turnFigure() }
}
