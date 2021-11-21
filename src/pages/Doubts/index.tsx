import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import DoubtCard from '../../components/Doubts/DoubtCard';
import { Page } from '../components';
import { DoubtsBox, PageBox } from './components';

const Doubts = (): JSX.Element => {
  const doubts = [
    {
      title:
        'Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ?',
      subject: 'História',
      content: 'Segunda Guerra Mundial',
      situation: false,
    },
    {
      title:
        'Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ?',
      subject: 'História',
      content: 'Segunda Guerra Mundial',
      situation: true,
    },
    {
      title:
        'Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ?',
      subject: 'História',
      content: 'Segunda Guerra Mundial',
      situation: false,
    },
  ];

  return (
    <Page>
      <PageBox>
        <SectionLabel label="Dúvidas" backLink="/home" />
        <DoubtsBox>
          {doubts.map((doubt) => (
            <DoubtCard key={doubt.title} data={doubt} />
          ))}
        </DoubtsBox>
      </PageBox>
    </Page>
  );
};

export default Doubts;
