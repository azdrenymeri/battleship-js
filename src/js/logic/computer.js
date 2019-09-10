const computer = (gameBoard) => {
  const board = gameBoard;

  const randomIndex = (freeColumns) => {
    const genIndex = Math
        .floor(Math.random()*(freeColumns.length-1 - 0 + 1)) + 0;
    return freeColumns[genIndex];
  };
  return {board, randomIndex};
};
export default {computer};
