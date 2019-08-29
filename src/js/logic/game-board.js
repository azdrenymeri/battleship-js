
const GameBoard = () => {
  const missedHits = 0;
  const grid = new Array(100).fill(0);
  const placeShip = (ship, coordinate, position) => {
    // first  lets get the first position we gonna add
    shipCoordinates = new Array(ship.length);
    if (position === 'h') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid[coordinate]);
        coordinate++;
      });
    } else if (position === 'v') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid[coordinate]);
        coordinate*=10;
      });
    }
    if (shipCoordinates.every((position) => position === 0)) {
      shipCoordinates.forEach((coordinate) => {
        grid[coordinate] = 'ship';
      });
      return true;
    }
    return false;
  };
  const acceptHit = (coordinate) => {
  };
  return {placeShip, grid, missedHits, acceptHit};
};

export {GameBoard};
