export function isAlphabet(str: string) {
  const regex = /^[A-Za-z]$/;
  if (str.length == 1 && regex.test(str)) {
    return true;
  }
  return false;
}

export function findUnusedIndex(data: WordleData) {
  for (let i = 0; i < 6; i++) {
    if (data[i].used == false) {
      return i;
    }
    i++;
  }
  return -1;
}

export function getColour(score: number) {
  switch (score) {
    case 0:
      return "gray.200";
    case 1:
      return "yellow.100";
    case 2:
      return "green.100";
    default:
      return "gray.50";
  }
}
