export const performCheck = number => {
  const numberAsArray = [...`${number}`];
  const reversedNumberAsArray = numberAsArray.slice().reverse();

  while (reversedNumberAsArray.length > 1) {
    reversedNumberAsArray.pop();
  }
  const lastDigit = parseInt(reversedNumberAsArray);

  switch (lastDigit) {
    case 0:
      return true;
    case 1:
      return false;
    case 2:
      return true;
    case 3:
      return false;
    case 4:
      return true;
    case 5:
      return false;
    case 6:
      return true;
    case 7:
      return false;
    case 8:
      return true;
    case 9:
      return false;
    default:
      return false;
  }
};
