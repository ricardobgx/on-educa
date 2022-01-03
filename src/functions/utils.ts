export const reduceTextSize = (
  value: string,
  maxStringLength: number,
): string => {
  if (value.length > maxStringLength)
    return `${value.substring(0, maxStringLength - 1)}...`;
  return value;
};
