const Computer = () => {
  const generateHitIndex = (freeColumns) => {
    const genIndex = Math
        .floor(Math.random()*(freeColumns.length-1 - 0 + 1)) + 0;
    return freeColumns[genIndex];
  };
  return {generateHitIndex};
};
export {Computer};
