export const formatAltitude = (altitude: number): string => {
  const thousand = 1000;
  const thousands = Math.trunc(altitude / thousand);
  const lastThreeDigits = altitude - thousands * thousand;

  return `${thousands} ${lastThreeDigits}`;
};
