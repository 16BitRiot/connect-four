/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

 const WIDTH = 7;
 const HEIGHT = 6;
 let currPlayer = 1; // active player: 1 or 2
 let board = []; // array of rows, each row is array of cells  (board[y][x])

//  new vars
let x = 0;
let y = 0;
const emptyColumn = Array.apply(null, Array(WIDTH));
let yAxis = emptyColumn;

// make yaxis
const makeYaxis = function(){
  yAxis.forEach(function(el, id) {y = id; yAxis[id] = [y, x];})
}

 /** makeBoard: create in-JS board structure:
  *    board = array of rows, each row is array of cells  (board[y][x])
  */
 
 function makeBoard() {
   // TODO: set "board" to empty HEIGHT x WIDTH matrix array

   // Run yAxis creator
   makeYaxis();

  //  Set board ** NOTE ** Only x numbers in the matrix are currently set
   const setBoard = [...Array(HEIGHT)].forEach((element, i) => {board.push(yAxis)});
    return board;
 }



// *****************************************************************
// LEFTOVERS/mAY USE OR NEED LATER

// function in progress:inserts 7 y/x arrays in index 0-5 in Yxline
// function tester() {yXline.map(x => x = yAxis)};

//  sanitized function
// let rowBlock = [[y, x], [y, x], [y, x], [y, x], [y, x], [y, x], [y, x]];
// function makeBoard() { 
//     const setBoard = [...Array(HEIGHT)].forEach((element, i) => board.push(rowBlock));
//     console.log(board);
//  }
// let rowBlock = [[], [], [], [], [], []];mak
//  }

// function in progress:inserts 1 y/x array in index 0-5 in Yxline
// let yXline = [];
// can be used if width can be created w/ one variable (replace yX here)
// function tester() {yXline = [...Array(HEIGHT)].fill(yAxis, 0);}

// let yX = [y, x];

// *****************************************************************