import {ship} from './../../logic/ship';
import {computer} from './../../logic/computer';
import {gameBoard} from './../../logic/game-board';

describe('computer.test.js', () => {
  let board;
  let comp;

  beforeAll(() => {
    board = gameBoard();
    comp = computer(board);
  });

  test('tests are working properly', ()=> {
    expect(1+1).toBe(2);
  });
});
