const figureLine = []
for (let i =4; i > 0; i--) {
    let newStone = new Stone (5, -i, true)
    figureLine.push(newStone)
}

const game = new Game(figureLine);

// no preload yet
function preload() {
    game.fixedStones.forEach(stone => { stone.preload() })
    game.movingStones.forEach(stone => { stone.preload() })
    //game.stones[0].preload()
}

function setup() {
    game.setup()
}

function draw() {
    game.draw()
}