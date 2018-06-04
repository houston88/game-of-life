export default class Game {

    constructor(initCells, width, height) {
        this.width = width;
        this.height = height;
        this.grid = initCells;
    }

    // TODO: Move this into a Cell abstraction
    calcAlive(row, col) {
        let top = 0,
          topRight = 0,
          right = 0,
          rightBottom = 0,
          bottom = 0, 
          bottomLeft = 0,
          left = 0,
          leftTop = 0;
        // top
        if (row > 0) { top = this.grid[row-1][col]; }
        // top right
        if (row > 0 && col < this.width - 1) { topRight = this.grid[row-1][col+1]; }
        // right
        if (col < this.width - 1) { right = this.grid[row][col+1]; }
        // right bottom
        if (col < this.width - 1 && row < this.height -1) { rightBottom = this.grid[row+1][col+1]; }
        // bottom
        if (row < this.height -1) { bottom = this.grid[row+1][col]; }
        // bottom left
        if (row < this.height -1 && col > 0) { bottomLeft = this.grid[row+1][col-1]; }
        // left
        if (col > 0) { left = this.grid[row][col-1]; }
        // left top
        if (col > 0 && row > 0) { leftTop = this.grid[row-1][col-1]; }
        const alive = this.grid[row][col];
        const total = top + topRight + right + rightBottom + bottom + bottomLeft + left + leftTop;
        if (alive) {
          if (total < 2) {
            // Any live cell with fewer than two live neighbors dies
            return 0;
          } else if (2 <= total && total <= 3) {
            // Any live cell with two or three live neighbors lives on to the next generation
            return 1;
          } else if (total > 3) {
            // Any live cell with more than three live neighbors dies, as if by overpopulation            
            return 0;
          }
        } else if (total === 3) {
          // Any dead cell with exactly three live eneighbors becomes a live cell, as if by reproduciton
          return 1;
        }
        // dead by default
        return 0;
    }

    step() {
      // copy grid
      let newGrid = Object.keys(this.grid).map((rowIndex) => {
        return this.grid[rowIndex].slice();
      });
      // run calcs
      for (let row = 0; row < this.height; row++) {
          for (let col = 0; col < this.width; col++) {
              newGrid[row][col] = this.calcAlive(row, col);
          }
      }
      // update and return grid
      this.grid = newGrid;
      return this.grid;
    }

    getCellAt(row, col) {
        return this.grid[row][col];
    }

}