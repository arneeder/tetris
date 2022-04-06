let gameActive = false

const initialFigureArray = createRandomFigure()
const initialFigure = initialFigureArray.slice(1)
const initialFigureType = initialFigureArray[0]

const game = new Game(initialFigure, initialFigureType);

function preload() {
    
    game.preload()
    game.fixedStones.forEach(stone => { stone.preload() })
    game.movingStones.forEach(stone => { stone.preload() })
}

function setup() {
    game.setup()
}

function draw() {
    if(game.isGameOver()) {
        gameActive = false
        document.querySelector('.game-over').classList.remove('transparent')
        game.song.stop()
    }
    if(gameActive) {
        game.draw()
    }
    // if(game.isGameOver()) {
    //     console.log('GAME OVER')
    // } else {
    //     game.draw()
    // } 
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) { game.moveFigureLeft() }
    if (keyCode === RIGHT_ARROW) { game.moveFigureRight() }
    if (keyCode === DOWN_ARROW) { game.moveFigureDown() }
    if (keyCode === UP_ARROW) {  
        game.turnFigure()
        // if (!game.song.isPlaying()) {
        //     game.song.play()
        // }
    }
    if (keyCode === 32) {
        activateGame()
        // gameActive = true
        // if (!game.song.isPlaying()) {
        //     game.song.loop()
        // }
    }
}