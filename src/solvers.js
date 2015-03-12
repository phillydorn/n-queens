/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, board, row) {
  //findRooks will take row parameter
  var board = board || new Board({'n': n});
  var row = row || 0;
  //iterate through columns in row (for loop)
  for (var cols = 0; cols < n; cols++){

    //toggle row, column to 1
    board.togglePiece(row, cols);
    //check for a conflict
    //if no conflict
    if (!board.hasAnyRooksConflicts()) {

      //if not last row
      if (row !== n-1){
        //findRookssolution on next row
        return findNRooksSolution(n, board, row+1);
      } else {
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
        return board.rows();
      }
      //if last row
        //return solution
    }

    board.togglePiece(row, cols);
    //toggle back to 0
  }
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n, board, row, count) {
  var board = board || new Board({'n': n});
  var row = row || 0;
  var count = count || 0;
  //iterate through columns in row (for loop)
  for (var cols = 0; cols < n; cols++){

    //toggle row, column to 1
    board.togglePiece(row, cols);
    //check for a conflict
    //if no conflict
    if (!board.hasAnyRooksConflicts()) {

      //if not last row
      if (row !== n-1){
        //findRookssolution on next row
        
        count = countNRooksSolutions(n, board, row+1, count);
      } else {
        
        count++;
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
        board.togglePiece(row, cols);
        return count;
      }
      //if last row
        //return solution
    }

    board.togglePiece(row, cols);
    //toggle back to 0
  }
  
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n, board, row, queens) {
  //findRooks will take row parameter
  var board = board || new Board({'n': n});
  var row = row || 0;
  var queens = queens || 0
  //iterate through columns in row (for loop)
  for (var cols = 0; cols < n; cols++){

    //toggle row, column to 1
    board.togglePiece(row, cols);
    queens++
    //check for a conflict
    //if no conflict
    if (!board.hasAnyQueensConflicts()) {

      //if not last row
      if (row !== n-1 && col !== n-1){
        //findRookssolution on next row
        return findNQueensSolution(n, board, row+1, queens);
      } else {
        console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
        return board.rows();
      }
      //if last row
        //return solution
    }

    board.togglePiece(row, cols);
    queens--
    //toggle back to 0
  }
  return board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
