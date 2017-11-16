const express = require('express');
const app = express();
const Game = require("./src/chess/Game");

const game = new Game();


app.get('/', function(req, res) {
    game.board.getAsciiBoard();
    game.init();

    res.send(game.board.getAsciiBoard() + game.board.getSquare("A", 1) + game.turn);
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000!')
);
