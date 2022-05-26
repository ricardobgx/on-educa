import React from 'react';
import { SmallMaterialIconOutlined } from '../../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  DailyPerformancePerformanceHeaderBox,
  DailyPerformancePerformanceHeaderTitle,
  DailyPerformancePerformanceHeaderLabel,
} from './styles';

const DailyPerformancePerformanceHeader: React.FC<
  IDailyPerformancePerformanceHeaderProps
> = (props) => {
  const { title, icon, dataLabel } = props;

  return (
    <DailyPerformancePerformanceHeaderBox>
      <DailyPerformancePerformanceHeaderTitle>
        {icon && <SmallMaterialIconOutlined icon={icon} color="" />}
        <DailyPerformancePerformanceHeaderLabel>
          {title}
        </DailyPerformancePerformanceHeaderLabel>
      </DailyPerformancePerformanceHeaderTitle>
      <DailyPerformancePerformanceHeaderLabel>
        {dataLabel}
      </DailyPerformancePerformanceHeaderLabel>
    </DailyPerformancePerformanceHeaderBox>
  );
};

export default DailyPerformancePerformanceHeader;
