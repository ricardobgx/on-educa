import React, { useState } from 'react';
import PracticePerformance from '../../components/Practice/PracticePerformance';
import PracticeQuestions from '../../components/Practice/PracticeQuestions';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox } from './styles';

const Practice = (): JSX.Element => {
  const [practiceCompleted, setPracticeCompleted] = useState(false);

  return (
    <Page>
      <PageBox>
        {!practiceCompleted ? (
          <PracticeQuestions setPracticeCompleted={setPracticeCompleted} />
        ) : (
          <PracticePerformance />
        )}
      </PageBox>
    </Page>
  );
};

export default Practice;
