import {
  deviceHeight,
  deviceType,
  deviceWidth,
} from '../../../functions/utils';
import { DeviceType } from '../../../types/deviceType';

const screenWidth = deviceWidth();
const screenHeight = deviceHeight();
const deviceTypeData = deviceType();

export const calcChartWidth = (): number => {
  if (deviceTypeData !== DeviceType.COMPUTER) {
    if (screenWidth > 450) {
      return screenWidth - 120;
    }
    return 450;
  }
  return screenWidth / 2;
};

export const calcChartHeight = (): number => {
  if (deviceTypeData !== DeviceType.COMPUTER) {
    return 300;
  }
  return screenHeight - 330;
};
