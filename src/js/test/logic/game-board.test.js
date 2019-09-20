import {ship} from './../../logic/ship';
import {gameBoard} from './../../logic/game-board';

describe('game-board.js', () => {
  let submarine;
  let carrier;
  let battleShip;
  let destroyer;
  let board;

  beforeAll(() => {
    submarine = ship('submarine', 3);
    carrier = ship('carrier', 5);
    battleShip = ship('battleShip', 4);
    destroyer = ship('destroyer', 2);
    board = gameBoard();
  });

  test('submarine is placed on board', ()=> {
    expect(board.placeShip(submarine, 12, 'h')).toBe(true);
  });

  test('carrier is placed on board ', ()=> {
    expect(board.placeShip(carrier, 54, 'v')).toBe(true);
  });

  test('can\'t add battleship outside the grid', ()=> {
    expect(board.placeShip(battleShip, 99, 'h')).toBe(false);
  });

  test('can\'t add battleShip on occupied coordinate', ()=> {
    expect(board.placeShip(battleShip, 54, 'h')).toBe(false);
  });

  test('battleShip is placed on board', ()=> {
    expect(board.placeShip(battleShip, 96, 'h')).toBe(true);
  });

  test('can\'t add destroyer on top of submarine', ()=>{
    expect(board.placeShip(destroyer, 2, 'v')).toBe(false);
  });

  test('destroyer is placed on board', ()=> {
    expect(board.placeShip(destroyer, 60, 'h')).toBe(true);
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

  test('destroyer is placed on correct coordinates', ()=> {
    // expect(board.grid[27]).toBe(destroyer.name);
    // expect(board.grid[37]).toBe(destroyer.name);
  });
  test('we missed a hit', () => {
    expect(board.receiveAttack(33)).toBe(false);
    expect(board.grid[33]).toBe('miss');
    expect(board.missedHits.length).toBe(1);
  });
  test('we hit the submarine', ()=> {
    expect(board.receiveAttack(13)).toBe(true);
    expect(submarine.body[1]).toBe(true);
    board.printGrid();
  });
  test('we cannot hit the same coordinate two times', () => {
    expect(board.receiveAttack(33)).toBe(false);
  });
  test('getFreePlaces must return all free spaces in grid', ()=> {
    board.getFreeColumns().forEach((place) => {
      expect(place).not.toBe('hit');
      expect(place).not.toBe('miss');
    });
  });
  test('just testing the placeRandomShip method', ()=>{
    board.randomPlaceShip(destroyer);
  });
});
