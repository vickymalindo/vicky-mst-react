export function generateRandomNumber(min: number, max: number) {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result.toLocaleString();
}
