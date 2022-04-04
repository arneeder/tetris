// function checkForCompleteRow() {};
// function removeRow(lineIndex) {};
// function getCanvasPostionFromCurrentField() {};
// function getCurrentFieldFromCanvasPostion()  {};
// function drawCanvas() {};

function createLineFigure() {
    const figure = []
    for (let i =4; i > 0; i--) {
        figure.push(new Stone(5, -i, true))
    }
    return figure
}

function createSquareFigure() {
    const figure = []
    for (let i = 4; i <= 5; i++) {
        for (let j = -2; j <= -1; j++) {
            figure.push(new Stone (i, j, true))
        }
    }
    return figure
}

function createTFigure() {
    const figure = []
    figure.push(new Stone (5, -2, true))
    figure.push(new Stone (4, -1, true))
    figure.push(new Stone (5, -1, true))
    figure.push(new Stone (6, -1, true))
    return figure
}

function createLFigureLeft() {
    const figure = []
    figure.push(new Stone (4, -3, true))
    figure.push(new Stone (5, -3, true))
    figure.push(new Stone (5, -2, true))
    figure.push(new Stone (5, -1, true))
    return figure
}

function createLFigureRight() {
    const figure = []
    figure.push(new Stone (5, -3, true))
    figure.push(new Stone (4, -3, true))
    figure.push(new Stone (4, -2, true))
    figure.push(new Stone (4, -1, true))
    return figure
}

function createJaggedFigureLeft() {
    const figure = []
    figure.push(new Stone (4, -3, true))
    figure.push(new Stone (4, -2, true))
    figure.push(new Stone (5, -2, true))
    figure.push(new Stone (5, -1, true))
    return figure
}

function createJaggedFigureRight() {
    const figure = []
    figure.push(new Stone (5, -3, true))
    figure.push(new Stone (5, -2, true))
    figure.push(new Stone (4, -2, true))
    figure.push(new Stone (4, -1, true))
    return figure
}

function createRandomFigure() {
    const figureCreateFunctions = [createLineFigure, createSquareFigure, createTFigure, createLFigureLeft, createLFigureRight, createJaggedFigureLeft, createJaggedFigureRight]
    const randomIndex = Math.floor(Math.random() * figureCreateFunctions.length)
    return figureCreateFunctions[randomIndex]()
}