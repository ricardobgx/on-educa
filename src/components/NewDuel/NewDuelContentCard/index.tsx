import React from 'react';
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
      <NewDuelContentCardSection label={content.name} bold />
      <AdditionalInfo>
        <NewDuelContentCardSection label={unity.name} bold={false} />
      </AdditionalInfo>
    </NewDuelContentCardBox>
  );
};

export default NewDuelContentCard;
