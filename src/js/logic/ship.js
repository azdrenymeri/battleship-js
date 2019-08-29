
const Ship = (shipName, shipLength) => {
  const name = shipName;
  const length = shipLength;
  const body = new Array(shipLength).fill(false);
  const isSunk = () => body.every((item) => item === true);
  const hit = (index) => {
    if (index > body.length) {
      return false;
    }
    if (body[index] === true) {
      return false;
    }
    body[index] = true;
    return true;
  };

  return {body, isSunk, hit, length, name};
};
export {Ship};
