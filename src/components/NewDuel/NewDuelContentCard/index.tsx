import React from 'react';
import { IContent } from '../../../interfaces/IContent';
import { IUnity } from '../../../interfaces/IUnity';
import NewDuelContentCardSection from '../NewDuelContentCardSection';
import { AdditionalInfo, NewDuelContentCardBox } from './styles';

export interface INewDuelContentCardProps {
  content: IContent;
  unity: IUnity;
}

const NewDuelContentCard = (props: INewDuelContentCardProps): JSX.Element => {
  const { content, unity } = props;

  return (
    <NewDuelContentCardBox>
      <NewDuelContentCardSection label={content.title} bold />
      <AdditionalInfo>
        <NewDuelContentCardSection label={unity.title} bold={false} />
      </AdditionalInfo>
    </NewDuelContentCardBox>
  );
};

export default NewDuelContentCard;
