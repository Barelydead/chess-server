// const Player = require("./Player");
// const Board = require("./Board");


/**
 * The chess player module
 * @module
 */
"use strict";

/**
 * Player class to controll the players pieces
 */
class Chess {
    /**
     * Init Game with board, peices, and players
     */
    constructor(Player, Board) {
        this.player1 = new Player("white", "player1");
        this.player2 = new Player("black", "player2");
        this.board = new Board();
    }
}

module.exports = Chess;
