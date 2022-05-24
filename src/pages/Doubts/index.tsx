import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import DoubtCard from '../../components/Doubts/DoubtCard';
import { getDoubts } from '../../functions/doubt';
import { Page } from '../../global/styles/components/pageComponents';
import OnEducaAPI from '../../services/api';
import { RootState } from '../../store';
import { TDoubtStatus } from '../../types/TDoubtStatus';
import { DoubtsList, DoubtsListBox, PageBox } from './components';

const Doubts = (): JSX.Element => {
  const [doubts, setDoubts] = useState<IDoubt[]>([]);

  const { aplication, people, student } = useSelector(
    (store: RootState) => store,
  );
  const { token } = aplication;

  useEffect(() => {
    if (token) {
      if (people.isStudent)
        getDoubts(OnEducaAPI, { studentId: student.id }, setDoubts, token);
      else
        getDoubts(
          OnEducaAPI,
          { status: TDoubtStatus.PENDING },
          setDoubts,
          token,
        );
    }
  }, [people, token, student]);

  return (
    <Page>
      <PageBox>
        <SectionLabel label="Dúvidas" backLink="/" />
        <DoubtsList>
          <DoubtsListBox>
            {doubts.map((doubt) => (
              <DoubtCard key={doubt.id} doubt={doubt} token={token} />
            ))}
          </DoubtsListBox>
        </DoubtsList>
      </PageBox>
    </Page>
  );
};

export default Doubts;
