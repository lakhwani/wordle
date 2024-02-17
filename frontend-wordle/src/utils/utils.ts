export function isAlphabet(str: string) {
  const regex = /^[A-Za-z]$/;
  if (str.length == 1 && regex.test(str)) {
    return true;
  }
  return false;
}
