/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import DashBoard from '../../components/Duel/DashBoard';
import { Page } from '../components';
import { PageBox } from './styles';

const Duel = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <DashBoard />
      </PageBox>
    </Page>
  );
};

export default Duel;
