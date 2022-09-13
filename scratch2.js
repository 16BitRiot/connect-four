/** makeHtmlBoard: make HTML table and row of column tops. */
// ******WORKSHEET********  

function makeHtmlBoard() {
    // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  
    // TODO: add comment for this code
    var top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener("click", handleClick);
  
    for (var x = 0; x < WIDTH; x++) {
      var headCell = document.createElement("td");
      headCell.setAttribute("id", x);
      top.append(headCell);
    }
    htmlBoard.append(top);
  
    // TODO: add comment for this code
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