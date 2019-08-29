import {Ship} from './../../logic/ship';
import {GameBoard} from './../../logic/game-board';

describe('game-board.js', ()=>{
  let ship;
  let board;
  let isPlaced;
  beforeAll(() => {
    ship = new Ship(4);
    board = new GameBoard();
    isPlaced = board.placeShip(ship, 12, 'h');
  });

  test('ship should be placed on the board', ()=> {
    expect(isPlaced).toBe(true);
  });

  test('the ship is placed on correct place', () => {
    expect(board.grid[12]).toBe(1);
    expect(board.grid[13]).toBe(1);
    expect(board.grid[14]).toBe(1);
    expect(board.grid[15]).toBe(1);
  });
});
