document.addEventListener('DOMContentLoaded', startGame)



// Define your `board` object here!
 var board = {
   cells: [
    {row: 0,col: 0,isMine: true,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 0,col: 1,isMine: true,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 0,col: 2,isMine: false,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 1,col: 0,isMine: false,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 1,col: 1,isMine: true,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 1,col: 2,isMine: false,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 2,col: 0,isMine: true,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 2,col: 1,isMine: false,isMarked: false,hidden: true,surroundingMines: 0},
    {row: 2,col: 2,isMine: true,isMarked: false,hidden: true,surroundingMines: 0}
  ]}


function startGame () { 
  for (var i=0; i < board.cells.length; i++){
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard() 

  document.addEventListener ('click',checkForWin);
  document.addEventListener('contextmenu',checkForWin);
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++)  {
    var cell = board.cells[i];
    if (cell.isMine && (cell.isMarked == false))
     return 
    if (cell.isMine == false && cell.hidden == true)
      return 
    
   }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  // Start with 0
  // Look at each cell
  // If cell is a mine, increment by 1
  // after running through each cell, return count 
  var countingMines = 0;
  for ( i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine) { // if cell is a mine
      countingMines++ 

    }

  }
  return countingMines
}


