const express = require('express');
const app = express();
const Board = require("./src/chess/Board");
const Pawn = require("./src/chess/pieces/Pawn");

let board = new Board();


app.get('/', function(req, res) {
    board.setUpEmptyTable();

    res.send(board.getAsciiBoard() + board.getSquare("A", 1));
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000!')
);
