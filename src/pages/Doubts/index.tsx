import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import DoubtCard from '../../components/Doubts/DoubtCard';
import { Page } from '../../global/styles/components/pageComponents';
import { DoubtsList, DoubtsListBox, PageBox } from './components';

const Doubts = (): JSX.Element => {
  const doubts: IDoubt[] = [];

  return (
    <Page>
      <PageBox>
        <SectionLabel label="Dúvidas" backLink="/" />
        <DoubtsList>
          <DoubtsListBox>
            {doubts.map((doubt) => (
              <DoubtCard key={doubt.id} data={doubt} />
            ))}
          </DoubtsListBox>
        </DoubtsList>
      </PageBox>
    </Page>
  );
};

export default Doubts;
