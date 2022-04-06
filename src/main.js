let gameActive = false

let game = new Game();

function preload() {
    
    game.preload()
    game.fixedStones.forEach(stone => { stone.preload() })
    game.movingStones.forEach(stone => { stone.preload() })
    gameOverSound = loadSound('../assets/gameover.wav')
}

function setup() {
    game.setup()
}

function draw() {
    if(game.isGameOver()) {
        game.song.stop()
         if (gameActive) {gameOverSound.play()}
        gameActive = false
        document.querySelector('.game-over').classList.remove('transparent')
        // game.song.stop()
        // gameOverSound.play()
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
        game.activateGame()
    }
}