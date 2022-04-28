import React from 'react';
import { TDoubtStatus } from '../../../types/TDoubtStatus';
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
  DoubtStatusBox,
  DoubtStatusIcon,
  DoubtStatusLabel,
} from './components';

interface IDoubtCardProps {
  data: IDoubt;
}

const DoubtCard = (props: IDoubtCardProps): JSX.Element => {
  const { data } = props;

  return (
    <DoubtBox to="/contents/12345#doubt12345" className="with-shadow bd-rd-5">
      <DoubtInfo>
        <DoubtInfoBox>
          <DoubtDescription>{data.content}</DoubtDescription>
          <DoubtReference>
            <DoubtReferenceBox>
              <DoubtReferenceIcon className="fas fa-book" />
              <DoubtReferenceLabel>{data.content.name}</DoubtReferenceLabel>
            </DoubtReferenceBox>
            <DoubtReferenceBox>
              <DoubtReferenceIcon className="fas fa-book" />
              <DoubtReferenceLabel>{data.content}</DoubtReferenceLabel>
            </DoubtReferenceBox>
          </DoubtReference>
        </DoubtInfoBox>
        <DoubtStatus>
          <DoubtStatusBox>
            <DoubtStatusIcon
              className={`fas fa-${
                data.status === TDoubtStatus.SOLVED ? 'check' : 'exclamation'
              }-circle`}
            />
            <DoubtStatusLabel>{`${
              data.status === TDoubtStatus.SOLVED ? 'Resolvida' : 'Pendente'
            }`}</DoubtStatusLabel>
          </DoubtStatusBox>
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
