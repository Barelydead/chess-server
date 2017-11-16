// const Pawn = require("./pieces/Pawn");
// const Rook = require("./pieces/Rook");
// const Bishop = require("./pieces/Bishop");
// const King = require("./pieces/King");
// const Queen = require("./pieces/Queen");
// const Knight = require("./pieces/Knight");

/**
 * The chess player module
 * @module
 */
"use strict";

/**
 * Player class to controll the players pieces
 */
class Player {
    /**
     * Constructor that that inits a player with name and oclor
     * @param {String} color
     * @param {String} name
     */
    constructor(color, name) {
        this.color = color;
        this.name = name;

        this.pieces = [];
    }
}

module.exports = Player;
