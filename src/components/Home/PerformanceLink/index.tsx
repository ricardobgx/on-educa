import React from 'react';
import { MediumMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import { PerformanceLinkBox, PerformanceLinkLabel } from './styles';

const PerformanceLink: React.FC<IPerformanceLinkProps> = (props) => {
  const { link, icon, label } = props;

  return (
    <PerformanceLinkBox to={link} className="with-shadow bd-rd-15">
      <MediumMaterialIconOutlined icon={icon} color="" />
      <PerformanceLinkLabel>{label}</PerformanceLinkLabel>
    </PerformanceLinkBox>
  );
};

export default PerformanceLink;
