
const gameBoard = () => {
  const missedHits = [];
  const grid = new Array(100).fill().map((v, i)=>i);
  const shipsOnBoard = [];

  const placeShip = (ship, coordinate, position) => {
    // first  lets get the  positions we gonna add the ship
    const shipCoordinates = [];
    if (position === 'h') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid.indexOf(grid[coordinate]));
        ship.coordinates.push(grid[coordinate]);
        coordinate++;
      });
    } else if (position === 'v') {
      ship.body.forEach((item) => {
        shipCoordinates.push(grid.indexOf(grid[coordinate]));
        ship.coordinates.push(grid[coordinate]);
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

  const receiveAttack = (coordinate) => {
    if (typeof grid[coordinate] === 'string') {
      if (grid[coordinate] === 'miss') {
        return false;
      }
      const shipThatGotHit = findShip(grid[coordinate]);

      if (shipThatGotHit) {
        if (shipThatGotHit.hitWithCoordinate(coordinate)) {
          grid[coordinate] = shipThatGotHit.name+'-hit';
          return true;
        }
      }
      grid[coordinate] = 'miss';
      missedHits.push(coordinate);
      return false;
    }
    grid[coordinate] = 'miss';
    missedHits.push(coordinate);
    return false;
  };

  const findShip = (name) => {
    return shipsOnBoard.find((ship) => ship.name === name);
  };

  const printGrid = () =>{
    let tempStr;
    for (let i = 0; i< grid.length; i++) {
      tempStr += ` [${grid[i]}]`;
      if (i%10==0) {
        tempStr+='\n';
      }
    };
    console.log(tempStr);
  };

  const getFreeColumns = () => {
    return grid.filter((column) => column !== 'hit' && column !== 'miss');
  };

  return {placeShip, grid, missedHits,
    receiveAttack, printGrid, getFreeColumns};
};

export {gameBoard};
