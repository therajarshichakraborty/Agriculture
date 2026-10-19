export function getStrokeLengths(
  easy: number,
  medium: number,
  hard: number,
  radius: number
) {
  const total = easy + medium + hard;
  const circumference = 2 * Math.PI * radius;

  return {
    easyLen: (easy / total) * circumference,
    mediumLen: (medium / total) * circumference,
    hardLen: (hard / total) * circumference,
    circumference
  };
}
