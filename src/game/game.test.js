import Game from './game';

describe('Game test', () => {

    beforeEach(() => {
        //Cell = new Cell();
    });

    it('Any live cell with fewer than two live neighbors dies', () => { 
        const starting_cells = [
            [1,1,0],
            [0,0,0],
            [0,0,0]
        ];
        const game = new Game(starting_cells, 3, 3);
        game.step();
        const cell = game.getCellAt(0,0);
        expect(cell).toBe(0);
    });

    it('Any live cell with two or three live neighbors lives on to the next generation', () => {
        const starting_cells = [
            [1,1,0],
            [1,0,0],
            [0,0,0]
        ];
        const game = new Game(starting_cells, 3, 3);
        game.step();
        const cell = game.getCellAt(0,0);
        expect(cell).toBe(1);
    });

    it('Any live cell with more than three live neighbors dies, as if by overpopulation', () => {
        const starting_cells = [
            [0,1,1],
            [1,1,1],
            [0,0,0]
        ];
        const game = new Game(starting_cells, 3, 3);
        game.step();
        const cell = game.getCellAt(1,1);
        expect(cell).toBe(0);
    });

    it('Any dead cell with exactly three live eneighbors becomes a live cell, as if by reproduciton', () => {
        const starting_cells = [
            [0,1,0],
            [1,1,0],
            [0,0,0]
        ];
        const game = new Game(starting_cells, 3, 3);
        game.step();
        const cell = game.getCellAt(0,0);
        expect(cell).toBe(1);
    });

});

