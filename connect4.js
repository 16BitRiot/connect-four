/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;
let currPlayer = 1;
let board = [];
const emptyRow = Array.apply(null, Array(WIDTH)); // make empty row
let emptySelect = ``;
// let htmlY = ``;
let lowestY = '';

/** makeBoard: create in-JS board structure:
 *  board = array of rows, each row is array of cells  (board[y][x])*/

function makeBoard() {
  // **TODO: set "board" to empty HEIGHT x WIDTH matrix array

  //  Set board 

  for (let i = 0; i < HEIGHT; i++) {
    const emptyRow = Array.apply(null, Array(WIDTH));
    board.push(emptyRow);
  }


  return board;
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // **TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  // debugger
  const htmlBoard = document.getElementById(`board`);

  // **TODO: add comment for this code
  // Create clickable element
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  // Create X Axis (Columns)
  for (let z = 0; z < WIDTH; z++) {
    var headCell = document.createElement("td");
    headCell.setAttribute("id", z);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // **TODO: add comment for this code
  // create Y Axis (Rows)

  for (var y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (var x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      const xY = `${y}-${x}`;
      // debugger
      cell.setAttribute("id", xY);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {

  // **TODO: write the real version of this, rather than always returning 0
  for (let i = 0; i < HEIGHT; i++) {
    debugger;
    const HTMLCellSelect = document.getElementById(`${i}-${x}`);
    const JSCellSelect = board[i][x];
    if (JSCellSelect === undefined) {
      lowestY = i;
      emptySelect = HTMLCellSelect;
    }
    if (JSCellSelect === 1) {
      console.log('slot taken')
      return i - 1;
      // board[i-1][x] = currPlayer;
    }
    if (JSCellSelect === 2) {
      console.log('slot taken')
      return i - 1;
      // board[i-1][x] = currPlayer;
    }
    if (lowestY === 5) {
      return lowestY;
    }

    // htmlY = cellSelect;
    // lowestY = i;
    // const spotChecker = board[`${i}`][`${x}`];
    // debugger
    // if (spotChecker === undefined) {
    //   return;
    // }
    // spotChecker = currPlayer;
  }
  return;

}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // **TODO: make a div and insert into correct table cell

  if (currPlayer === 1) {
    let makeDiv = document.createElement('div');
    let bluePiece = makeDiv.classList.add("bluePiece", currPlayer);
    // Create div
    debugger
    emptySelect.appendChild(makeDiv);
    board[y][x] = currPlayer;
  }
  if (currPlayer === 2) {
    let makeDiv = document.createElement('div');
    let redPiece = makeDiv.classList.add("redPiece", currPlayer);
    // Create div
    emptySelect.appendChild(makeDiv);
    board[y][x] = currPlayer;
  }
  console.log(x, y)
  // board[x][y] = currPlayer;
}

/** endGame: announce game end */

function endGame(msg) {
  // **TODO: pop up alert message
  alert(msg);

}
/** checkForWin: check board cell-by-cell for "does a win start here?" */
function checkForWin() {
  // debugger
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // **TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  debugger
  // get x from ID of clicked cell
  let x = +evt.target.id;
  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // **TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // **TODO: check if all cells in board are filled; if so call, call endGame
  const allDiv = document.querySelectorAll("div")
  function draw() {
    if (allDiv.length === 43) {
      alert("DRAW")
    }

  }
  draw();

  // switch players
  // **TODO: switch currPlayer 1 <-> 2
  // blue is player 1 red is player 2

  function updatePlayer() {
    if (currPlayer === 1) {
      return currPlayer = 2;
    }
    if (currPlayer === 2) {
      return currPlayer = 1;
    }
  }
  updatePlayer();
}

makeBoard();
makeHtmlBoard();

// const tester = function () {
//   for (let i = 0; i < HEIGHT; i++) {
//     console.log(i);
//     for (let z = 0; z < WIDTH; z++) {
//       console.log(i, z);
//       const IZ = [i, z];
//       board.insert(i, z)
//     }
//   }
// };

