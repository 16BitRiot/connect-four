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
// ***** this adds the # for the Y axis, may need to be removed
const makeYaxis = function(){
  yAxis.forEach(function(el, id) {yAxis[id] = [y, x];})
}


 /** makeBoard: create in-JS board structure:
  *    board = array of rows, each row is array of cells  (board[y][x])
  */
 
 function makeBoard() {
   // TODO: set "board" to empty HEIGHT x WIDTH matrix array

   // Run yAxis creator
   makeYaxis();

  //  Set board ** NOTE ** Only y numbers in the matrix are currently set
   const setBoard = [...Array(HEIGHT)].forEach((element, i) => {board.push(yAxis)});
    }


/** makeHtmlBoard: make HTML table and row of column tops. */
// ******WORKSHEET********  

function makeHtmlBoard() {
    // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
const gameBoard = document.getElementById(`board`);

    // TODO: add comment for this code
    // Create clickable element
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener("click", handleClick);
  
    // Create X Axis (Columns)
    for (var x = 0; x < WIDTH; x++) {
      var headCell = document.createElement("td");
      headCell.setAttribute("id", x);
      top.append(headCell);
    }
    htmlBoard.append(top);
  
    // TODO: add comment for this code
    // create Y Axis (Rows)
    for (var y = 0; y < HEIGHT; y++) {
      const row = document.createElement("tr");
      for (var x = 0; x < WIDTH; x++) {
        const cell = document.createElement("td");
        cell.setAttribute("id", `${y}-${x}`);
        row.append(cell);
      }
      htmlBoard.append(row);
    }
  }