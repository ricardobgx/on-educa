import React from 'react';
import DoubtComment from '../DoubtComment';
import { DoubtCommentsBox } from './styles';

interface IDoubtCommentsProps {
  doubtComments: IDoubtComment[];
}

const DoubtComments = (props: IDoubtCommentsProps): JSX.Element => {
  const { doubtComments } = props;

  return (
    <DoubtCommentsBox>
      {doubtComments.map((doubtComment) => (
        <DoubtComment doubtComment={doubtComment} />
      ))}
    </DoubtCommentsBox>
  );
};

export default DoubtComments;
