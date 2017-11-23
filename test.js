const Game = require("./src/chess/game");
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let game = new Game();

game.init();
console.log("Chess CLI test\n");
console.log(game.board.getAsciiBoard());

rl.on("line", function(line) {
    switch (line.trim()) {
        case "exit":
            console.log("Bye!");
            process.exit(0);
            break;

       default:
           var co = line.split(" ");

           game.board.move(co[0], co[1], co[2], co[3]);
           console.log(game.board.getAsciiBoard());
    }
    rl.prompt();
});
