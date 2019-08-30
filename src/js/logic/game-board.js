
const GameBoard = () => {
  const missedHits = 0;
  const grid = new Array(100).fill().map((v, i)=>i);
  const shipsOnBoard = [];
  const placeShip = (ship, coordinate, position) => {
    // first  lets get the  positions we gonna add
    const shipCoordinates = [];
    if (position === 'h') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid.indexOf(grid[coordinate]));
        coordinate++;
      });
    } else if (position === 'v') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid.indexOf(grid[coordinate]));
        coordinate+=10;
      });
    }
    // checks if we are adding a ship on top of another
    if (shipCoordinates
        .every((position) => typeof grid[position] !== 'string')) {
      // if it equials to -1 means we are outside the bounds of grid
      if (shipCoordinates[shipCoordinates.length-1] === -1) {
        return false;
      }
      shipCoordinates.forEach((coord) => {
        grid[coord] = ship.name;
      });
      shipsOnBoard.push(ship);
      return true;
    }
    return false;
  };

  const acceptHit = (coordinate) => {
    if (grid[coordinate] === typeof 'string') {
      const shipThatGotHit = findShip(grid[coordinate]);
      console.log(shipThatGotHit.name);
      return true;
    }
    return false;
  };
  const findShip = (name) => {
    return shipsOnBoard.fill((ship) => ship.name === name);
  };

  return {placeShip, grid, missedHits, acceptHit};
};

export {GameBoard};
