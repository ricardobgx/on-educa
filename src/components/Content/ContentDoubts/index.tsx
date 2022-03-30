import React, { useEffect, useState } from 'react';
import { getDoubts, getDoubtsByContent } from '../../../functions/doubt';
import { IDoubt } from '../../../interfaces/IDoubt';
import { IStudent } from '../../../interfaces/IStudent';
import { ITeacher } from '../../../interfaces/ITeacher';
import OnEducaAPI from '../../../services/api';
import ContentDoubt from '../ContentDoubt';
import { DoubtsBox, DoubtsList } from './styles';

interface IContentDoubtsProps {
  contentId: string;
  student: IStudent;
  teacher: ITeacher;
  token: string;
}

const ContentDoubts = (props: IContentDoubtsProps): JSX.Element => {
  const { contentId, student, teacher, token } = props;

  const [doubts, setDoubts] = useState<IDoubt[]>([]);

  useEffect(() => {
    if (token) {
      getDoubtsByContent(OnEducaAPI, contentId, setDoubts, token);
    }
  }, [token]);

  return (
    <DoubtsBox>
      <DoubtsList>
        {doubts.map((doubt) => (
          <ContentDoubt {...doubt} />
        ))}
      </DoubtsList>
    </DoubtsBox>
  );
};

export default ContentDoubts;
