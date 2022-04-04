function checkForCompleteRow() {};
function removeRow(lineIndex) {};
function getCanvasPostionFromCurrentField() {};
function getCurrentFieldFromCanvasPostion()  {};
function drawCanvas() {};

function fixStonesPosition(movingStones) {
    const newFixedStones = []
    movingStones.forEach(stone => {
        newFixedStones.push(stone)
    })
    return newFixedStones
}