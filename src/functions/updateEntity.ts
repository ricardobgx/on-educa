export const stringFieldValidation = (value: string): string | undefined =>
  value.trim() === '' ? undefined : value;
