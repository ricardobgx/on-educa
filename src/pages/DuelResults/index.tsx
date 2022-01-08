import React from 'react';
import TeamsResults from '../../components/DuelResults/TeamsResults';
import { Page } from '../../global/styles/components/pageComponents';
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
