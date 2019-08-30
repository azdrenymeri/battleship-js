import {Ship} from './../../logic/ship';
import {GameBoard} from './../../logic/game-board';

describe('game-board.js', ()=>{
  let submarine;
  let carrier;
  let battleShip;
  let board;

  beforeAll(() => {
    submarine = new Ship('submarine', 3);
    carrier = new Ship('carrier', 5);
    battleShip = new Ship('battleShip', 4);
    board = new GameBoard();
  });

  test('Submarine should be placed VERTICALLY on the board', ()=> {
    expect(board.placeShip(submarine, 12, 'h')).toBe(true);
  });

  test('Carrier should be placed HORIZONTALLY on the board', ()=> {
    expect(board.placeShip(carrier, 54, 'v')).toBe(true);
  });

  test('You can\'t add battleship outside the grid', ()=> {
    expect(board.placeShip(battleShip, 99, 'h')).toBe(false);
  });
  test('You can\'t add battleShip on occupied coordinate', ()=> {
    expect(board.placeShip(battleShip, 54, 'h')).toBe(false);
  });
  test('battleShip should be placed horizontaly on the board', ()=> {
    expect(board.placeShip(battleShip, 96, 'h')).toBe(true);
  });

  test('submarine is placed on correct coordinates', ()=> {
    expect(board.grid[12]).toBe(submarine.name);
    expect(board.grid[13]).toBe(submarine.name);
    expect(board.grid[14]).toBe(submarine.name);
  });

  test('carrier is placed on correct coordinates', ()=> {
    expect(board.grid[54]).toBe(carrier.name);
    expect(board.grid[64]).toBe(carrier.name);
    expect(board.grid[74]).toBe(carrier.name);
    expect(board.grid[84]).toBe(carrier.name);
    expect(board.grid[94]).toBe(carrier.name);
  });

  test('battleShip is placed on correct coordinates', ()=> {
    expect(board.grid[96]).toBe(battleShip.name);
    expect(board.grid[97]).toBe(battleShip.name);
    expect(board.grid[98]).toBe(battleShip.name);
    expect(board.grid[99]).toBe(battleShip.name);
  });
});
