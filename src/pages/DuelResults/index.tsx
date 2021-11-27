import React from 'react';
import TeamsResults from '../../components/DuelResults/TeamsResults';
import { Page } from '../components';
import { PageBox } from './styles';

const DuelResults = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <TeamsResults />
      </PageBox>
    </Page>
  );
};

export default DuelResults;
