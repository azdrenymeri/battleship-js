import {Ship} from './../../logic/ship';

describe('ship.js', ()=> {
  let carrier;
  beforeAll(()=> {
    carrier = new Ship('carrier', 4);
  });
  test('ship should have a name', () => {
    expect(carrier.name).toBe('carrier');
  });

  test('ship length must be exact', () => {
    expect(carrier.body.length).toBe(4);
  });

  test('ship should not be damanged', ()=> {
    carrier.body.every((bodyPart) => expect(bodyPart).toBe(false));
  });

  test('ship must be hitted at index 1', () => {
    carrier.hit(1);
    expect(carrier.body[1]).toBe(true);
  });

  test('hitting the same position should return false', () => {
    carrier.hit(0);
    expect(carrier.hit(0)).toBe(false);
  });

  test('typing a large index is not allowed', () => {
    const result = carrier.hit(2000);
    expect(result).toBe(false);
  });

  test('isSunk should return true if the body arr is true', ()=>{
    carrier.hit(2);
    carrier.hit(3);
    expect(carrier.isSunk()).toBe(true);
  });
});
