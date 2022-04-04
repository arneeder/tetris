const game = new Game();

// no preload yet
function preload() {
    game.stones.forEach(stone => { stone.preload() })
    //game.stones[0].preload()
}

function setup() {
    game.setup()
}

function draw() {
    game.draw()
}