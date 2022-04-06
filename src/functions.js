/* CREATE FIGURE FUNCTIONS */
function createLineFigure() {
    const figure = ['lineFigure']
    for (let i = 4; i > 0; i--) {
        figure.push(new Stone(5, -i, true))
    }
    return figure
}

function createSquareFigure() {
    const figure = ['squareFigure']
    for (let i = 4; i <= 5; i++) {
        for (let j = -2; j <= -1; j++) {
            figure.push(new Stone (i, j, true))
        }
    }
    return figure
}

function createTFigure() {
    const figure = ['tFigure']
    figure.push(new Stone (5, -2, true))
    figure.push(new Stone (4, -1, true))
    figure.push(new Stone (5, -1, true))
    figure.push(new Stone (6, -1, true))
    return figure
}

function createLFigureLeft() {
    const figure = ['lFigureLeft']
    figure.push(new Stone (4, -3, true))
    figure.push(new Stone (5, -3, true))
    figure.push(new Stone (5, -2, true))
    figure.push(new Stone (5, -1, true))
    return figure
}

function createLFigureRight() {
    const figure = ['lFigureRight']
    figure.push(new Stone (5, -3, true))
    figure.push(new Stone (4, -3, true))
    figure.push(new Stone (4, -2, true))
    figure.push(new Stone (4, -1, true))
    return figure
}

function createJaggedFigureLeft() {
    const figure = ['jaggedFigureLeft']
    figure.push(new Stone (4, -3, true))
    figure.push(new Stone (4, -2, true))
    figure.push(new Stone (5, -2, true))
    figure.push(new Stone (5, -1, true))
    return figure
}

function createJaggedFigureRight() {
    const figure = ['jaggedFigureRight']
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

// test -> set explicit figure
// function createRandomFigure() {
//     return createSquareFigure()
// }

/* TURN FIGURE FUNCTIONS */
// turn line
function turnLineFigure(arr, position) {
    switch (position) {
        case 0:
        case 2:
            arr[0].x -= 1;
            arr[0].y += 1;
            arr[1].x -= 0;
            arr[1].y += 0;
            arr[2].x += 1;
            arr[2].y -= 1;
            arr[3].x += 2;
            arr[3].y -= 2;
            break;
        case 1:
        case 3:
            arr[0].x += 1;
            arr[0].y -= 1;
            arr[1].x += 0;
            arr[1].y -= 0;
            arr[2].x -= 1;
            arr[2].y += 1;
            arr[3].x -= 2;
            arr[3].y += 2;
            break;
    }

}

function turnSquareFigure(arr, position) {
    return true;
}

function turnTFigure(arr, position) {
    switch(position) {
        case 0:
            arr[1].y -= 1;
            arr[3].x -= 1;
            arr[3].y -= 2;
            break;
        case 1:
            arr[3].x += 1;
            arr[3].y += 1;
            break;
        case 2:
            arr[1].x += 1;
            arr[1].y -= 1;
            break;
        case 3:
            arr[1].x -= 1;
            arr[1].y += 2;
            arr[3].y += 1;
            break;
    }
}

function turnLFigureLeft(arr, position) {
    switch(position) {
        case 0:
            arr[0].y += 1;
            arr[1].x -= 1;
            arr[2].y -= 1;
            arr[3].x += 1
            arr[3].y -= 2;
            break;
        case 1:
            arr[0].x += 1;
            arr[0].y += 1;
            arr[1].y += 2;
            arr[2].x -= 1;
            arr[2].y += 1;
            arr[3].x -= 2;
            break;
        case 2:
            arr[0].y -= 1;
            arr[1].x += 1;
            arr[2].y += 1;
            arr[3].x -= 1;
            arr[3].y += 2;
            break;
        case 3:
            arr[0].x -= 1;
            arr[1].y -= 1;
            arr[2].x += 1;
            arr[3].x += 2;
            arr[3].y += 1;
            break;
    }
}

function turnLFigureRight(arr, position) {
    switch(position) {
        case 0:
            arr[0].x -= 1;
            arr[1].y += 1;
            arr[2].x += 1;
            arr[3].x += 2;
            arr[3].y -= 1;
            break;
        case 1:
            arr[0].y += 2;
            arr[1].x += 1;
            arr[1].y += 1;
            arr[3].x -= 1;
            arr[3].y -= 1;
            break;
        case 2:
            arr[0].x += 1;
            arr[0].y -= 1;
            arr[1].y -= 2;
            arr[2].x -= 1;
            arr[2].y -= 1;
            arr[3].x -= 2;
            break;
        case 3:
            arr[0].y -= 1;
            arr[1].x -= 1;
            arr[2].y += 1;
            arr[3].x += 1;
            arr[3].y += 2;
            break;
    }
}

function turnJaggedFigureLeft(arr, position) {
    switch(position) {
        case 0:
        case 2:
            arr[0].y += 2;
            arr[1].x += 1;
            arr[1].y += 1;
            arr[3].x += 1;
            arr[3].y -= 1;
            break;
        case 1:
        case 3:
            arr[0].y -= 2;
            arr[1].x -= 1;
            arr[1].y -= 1;
            arr[3].x -= 1;
            arr[3].y += 1;
            break;
    }
}

function turnJaggedFigureRight(arr, position) {
    switch(position) {
        case 0:
        case 2:
            arr[0].x -= 1;
            arr[0].y += 1;
            arr[2].x += 1;
            arr[2].y += 1;
            arr[3].x += 2;
            break;
        case 1:
        case 3:
            arr[0].x += 1;
            arr[0].y -= 1;
            arr[2].x -= 1;
            arr[2].y -= 1;
            arr[3].x -= 2;
            break;
    }
}