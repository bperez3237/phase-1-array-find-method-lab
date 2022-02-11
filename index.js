// code your solution here
function superbowlWin(record) {
    let x = record.find(isWin);
    if (!( x === undefined)) {
        return x.year;
    }

    return undefined;

}

function isWin(game, index, array) {
    let result = undefined;

    if (game.result === 'W') {
        //console.log('if state');
        //console.log(game.year);
        result = game;
        return result;
    };

}