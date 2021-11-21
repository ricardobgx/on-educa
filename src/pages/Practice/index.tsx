import React, { useState } from 'react';
import PracticePerformance from '../../components/Practice/PracticePerformance';
import Questions from '../../components/Practice/Questions';
import { Page } from '../components';
import { PageBox } from './styles';

const Practice = (): JSX.Element => {
  const [practiceCompleted, setPracticeCompleted] = useState(false);

  return (
    <Page>
      <PageBox>
        {!practiceCompleted ? (
          <Questions setPracticeCompleted={setPracticeCompleted} />
        ) : (
          <PracticePerformance />
        )}
      </PageBox>
    </Page>
  );
};

export default Practice;
