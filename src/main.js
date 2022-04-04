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