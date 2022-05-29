import React from 'react';
import { SmallMaterialIconOutlined } from '../../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  PerformanceTypeBox,
  PerformanceTypeHeader,
  PerformanceTypeLabel,
  PerformanceTypeTitle,
} from './styles';

const PerformanceType: React.FC<IPerformanceTypeProps> = (props) => {
  const { icon, title, label } = props;

  return (
    <PerformanceTypeBox className="bd-rd-10">
      <PerformanceTypeHeader>
        <SmallMaterialIconOutlined icon={icon} color="" />
        <PerformanceTypeTitle>{title}</PerformanceTypeTitle>
      </PerformanceTypeHeader>
      <PerformanceTypeLabel>{label}</PerformanceTypeLabel>
    </PerformanceTypeBox>
  );
};

export default PerformanceType;
