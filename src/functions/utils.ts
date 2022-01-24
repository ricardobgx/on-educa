import { DeviceType } from '../types/deviceType';

export const randInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const reduceTextSize = (
  value: string,
  maxStringLength: number,
): string => {
  if (value.length > maxStringLength)
    return `${value.substring(0, maxStringLength - 1)}...`;
  return value;
};

export const getYTVideoCode = (url: string): string => {
  const urlParts = url.split('?');

  if (urlParts[1]) {
    const query = urlParts[1];
    const queryParams = query.split('&');

    if (queryParams[0]) {
      const vParam = queryParams[0];
      const vParamValue = vParam.split('=')[1];

      if (vParamValue) return vParamValue;
    }
  }

  return '';
};

export const deviceWidth = (): number => {
  return window.innerWidth;
};

export const deviceHeight = (): number => {
  return window.innerHeight;
};

export const deviceType = (): DeviceType => {
  const deviceWidthValue = deviceWidth();

  if (deviceWidthValue < 600) {
    return DeviceType.SMARTPHONE;
  }
  if (deviceWidthValue > 1150) {
    return DeviceType.COMPUTER;
  }
  return DeviceType.TABLET;
};
