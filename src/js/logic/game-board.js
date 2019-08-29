
const GameBoard = () => {
  const missedHits = 0;
  const grid = new Array(100).fill().map((v, i)=>i);
  const placeShip = (ship, coordinate, position) => {
    // first  lets get the first position we gonna add
    const shipCoordinates = new Array(ship.length);

    if (position === 'h') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid.indexOf(grid[coordinate]));
        coordinate++;
      });
    } else if (position === 'v') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid.indexOf(grid[coordinate]));
        coordinate*=10;
      });
    }
    if (shipCoordinates.every((position) => position !== typeof 'string')) {
      shipCoordinates.forEach((coord) => {
        grid[coord] = 1;
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
