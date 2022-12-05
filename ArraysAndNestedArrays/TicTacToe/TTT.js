function game(moves) {
    const board = [[false, false, false], [false, false, false], [false, false, false]];

    let playerTwoTurn = false;

    for (let i = 0; i < moves.length; i++) {

        
        let move = moves[i].split(' ').map(Number);
        
        if (board[move[0]][move[1]] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        };

        if (playerTwoTurn === false) {
            board[move[0]][move[1]] = 'X';
        }else{
            board[move[0]][move[1]] = 'O';
        };

        if (winner(board)) {
            console.log(`Player ${playerTwoTurn ? 'O': 'X'} wins!`);

            break;
        }

        if (!board.some(el => el.some( el => el === false))) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
        

        playerTwoTurn = !playerTwoTurn;
    }

    board.forEach(row => {
        console.log(row.join('\t'));
    });

    function winner(board) {
        let flag = false;

        for (let r = 0; r < board.length; r++) {
            if (board[r][0] !== false && board[r][0] === board[r][1] && board[r][0] === board[r][2]) {
                flag = true;
                break;
            };
        };

        for (let r = 0; r < board.length; r++) {
            if (board[0][r] !== false && board[0][r] === board[1][r] && board[0][r] === board[2][r]) {
                flag = true;
                break;
            };
        };

        if ((board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) || (board[2][0] && board[2][0] === board[1][1] && board[2][0] === board[0][2])) {
                flag = true;
        }

        return flag;
    }
}

game(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 1",

"1 2",

"2 2",

"2 1",

"0 0"] );

game(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
game(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 2",

"1 1",

"2 1",

"2 2",

"0 0"] );