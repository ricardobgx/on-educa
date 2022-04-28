import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDoubtsByContent } from '../../../functions/doubt';
import OnEducaAPI from '../../../services/api';
import { RootState } from '../../../store';
import ContentDoubt from '../ContentDoubt';
import NewDoubt from '../NewDoubt';
import { DoubtsBox, DoubtsList } from './styles';

interface IContentDoubtsProps {
  contentId: string;
  student: IStudent;
  token: string;
}

const ContentDoubts = (props: IContentDoubtsProps): JSX.Element => {
  const { contentId, student, token } = props;
  const { people } = useSelector((store: RootState) => store);
  const { isStudent } = people;

  const [doubts, setDoubts] = useState<IDoubt[]>([]);

  const newDoubtAdded = (newDoubt: IDoubt): void => {
    setDoubts([...doubts, newDoubt]);
  };

  useEffect(() => {
    if (token) {
      getDoubtsByContent(OnEducaAPI, contentId, setDoubts, token);
    }
  }, [token]);

  return (
    <DoubtsBox>
      <DoubtsList>
        {doubts.map((doubt) => (
          <ContentDoubt doubt={doubt} token={token} />
        ))}
      </DoubtsList>
      {isStudent && (
        <NewDoubt
          studentId={student.id}
          contentId={contentId}
          token={token}
          newDoubtAdded={newDoubtAdded}
        />
      )}
    </DoubtsBox>
  );
};

export default ContentDoubts;
