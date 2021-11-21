import React from 'react';
import {
  DoubtBox,
  DoubtComments,
  DoubtCommentsIcon,
  DoubtCommentsNumber,
  DoubtDescription,
  DoubtInfo,
  DoubtInfoBox,
  DoubtReference,
  DoubtReferenceBox,
  DoubtReferenceIcon,
  DoubtReferenceLabel,
  DoubtStatus,
  DoubtStatusIcon,
} from './components';

interface IDoubt {
  title: string;
  subject: string;
  content: string;
  situation: boolean;
}

interface IDoubtCardProps {
  data: IDoubt;
}

const DoubtCard = (props: IDoubtCardProps): JSX.Element => {
  const { data } = props;

  return (
    <DoubtBox to="/contents/12345#doubt12345">
      <DoubtInfo>
        <DoubtInfoBox>
          <DoubtDescription>{data.title}</DoubtDescription>
          <DoubtReference>
            <DoubtReferenceBox>
              <DoubtReferenceIcon className="fas fa-book" />
              <DoubtReferenceLabel>{data.subject}</DoubtReferenceLabel>
            </DoubtReferenceBox>
            <DoubtReferenceBox>
              <DoubtReferenceIcon className="fas fa-book" />
              <DoubtReferenceLabel>{data.content}</DoubtReferenceLabel>
            </DoubtReferenceBox>
          </DoubtReference>
        </DoubtInfoBox>
        <DoubtStatus>
          <DoubtStatusIcon
            className={`fas fa-${
              data.situation ? 'check' : 'exclamation'
            }-circle`}
          />
          <DoubtComments>
            <DoubtCommentsNumber>0</DoubtCommentsNumber>
            <DoubtCommentsIcon className="fas fa-comment-alt" />
          </DoubtComments>
        </DoubtStatus>
      </DoubtInfo>
    </DoubtBox>
  );
};

export default DoubtCard;
