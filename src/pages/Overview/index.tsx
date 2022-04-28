import React from 'react';
import { OverviewBox } from './styles';

import SignForms from '../../components/Overview/Sign/SignForms';
import PlatformInformation from '../../components/Overview/PlatformInformation';

const Overview = (): JSX.Element => {
  const minHeight = `${window.innerHeight}px`;

  return (
    <OverviewBox>
      <PlatformInformation />
      <SignForms />
    </OverviewBox>
  );
};

export default Overview;
