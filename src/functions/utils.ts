import { AxiosError } from 'axios';
import { DeviceType } from '../types/deviceType';

export const randInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

export const reduceTextSize = (
  value: string,
  desktopMaxLength: number,
  mobileMaxLength: number,
): string => {
  const maxStringLength =
    deviceType() === DeviceType.COMPUTER ? desktopMaxLength : mobileMaxLength;

  if (value.length > maxStringLength)
    return `${value.substring(0, maxStringLength - 1)}...`;
  return value;
};

export const displayDayAndMonthDate = (date: string): string => {
  const dateSections = date.split('/');
  const dayAndMonth = `${dateSections[0]}/${dateSections[1]}`;

  return dayAndMonth;
};

export const stringToBoolean = (value: string): boolean => value === 'true';

export const getFullDate = (date?: Date): string => {
  const now = date ? new Date(date) : new Date();

  const day = now.getUTCDate();
  const month = now.getUTCMonth() + 1;
  const year = now.getUTCFullYear();

  return `${day < 10 ? '0' : ''}${day}/${
    month < 10 ? '0' : ''
  }${month}/${year}`;
};

export const showErrorMessage = (
  err: AxiosError,
  showFloatNotification: (content: string) => void,
): void => {
  const errData = err.response?.data;
  const { error: errorMsg } = errData;

  showFloatNotification(errorMsg);
};
