import React from 'react';
import DoubtCard from '../../components/Doubts/DoubtCard';
import { Page } from '../components';
import { SectionLabelBox, SectionLabelText } from '../Home/components';
import { DoubtsBox, PageBox } from './components';

const Doubts = (): JSX.Element => {
  const doubts = [
    {
      title:
        'Dúvida 1 - Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ?',
      subject: 'História',
      content: 'Segunda Guerra Mundial',
      situation: false,
    },
    {
      title:
        'Dúvida 2 - Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ?',
      subject: 'História',
      content: 'Segunda Guerra Mundial',
      situation: true,
    },
    {
      title:
        'Dúvida 3 - Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ?',
      subject: 'História',
      content: 'Segunda Guerra Mundial',
      situation: false,
    },
  ];

  return (
    <Page>
      <PageBox>
        <SectionLabelBox>
          <SectionLabelText>Dúvidas</SectionLabelText>
        </SectionLabelBox>
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
