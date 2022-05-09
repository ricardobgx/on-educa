import React from 'react';
import {
  SectionInDevelopmentBox,
  SectionInDevelopmentIcon,
  SectionInDevelopmentLabel,
} from './styles';

const SectionInDevelopment: React.FC = () => {
  return (
    <SectionInDevelopmentBox className="bd-rd-20">
      <SectionInDevelopmentIcon className="fas fa-cogs" />
      <SectionInDevelopmentLabel>Em construção</SectionInDevelopmentLabel>
    </SectionInDevelopmentBox>
  );
};

export default SectionInDevelopment;
