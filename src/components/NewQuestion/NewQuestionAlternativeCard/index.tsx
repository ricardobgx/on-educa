import React from 'react';
import theme from '../../../global/styles/theme';
import {
  NewQuestionAlternativeCardBox,
  NewQuestionAlternativeDetails,
  NewQuestionAlternativeDescription,
  NewQuestionAlternativeActions,
  DeleteAlternativeButton,
  DeleteAlternativeButtonIcon,
  RightAlternativeButton,
  RightAlternativeButtonIcon,
} from './styles';

interface INewQuestionAlternativeCardProps {
  description: string;
  deleteAlternative: (description: string) => void;
  rightAlternative: string;
  setRightAlternative: (description: string) => void;
}

const NewQuestionAlternativeCard = (
  props: INewQuestionAlternativeCardProps,
): JSX.Element => {
  const {
    description,
    deleteAlternative,
    rightAlternative,
    setRightAlternative,
  } = props;

  return (
    <NewQuestionAlternativeCardBox>
      <NewQuestionAlternativeDetails>
        <NewQuestionAlternativeDescription>
          {description}
        </NewQuestionAlternativeDescription>
      </NewQuestionAlternativeDetails>
      <NewQuestionAlternativeActions>
        <RightAlternativeButton
          onClick={() => setRightAlternative(description)}
          style={{
            background:
              rightAlternative === description
                ? theme.similarColors.rightQuestion
                : '',
            color:
              rightAlternative === description ? theme.colors.whiteColor : '',
          }}
        >
          <RightAlternativeButtonIcon className="fas fa-check" />
        </RightAlternativeButton>
        <DeleteAlternativeButton onClick={() => deleteAlternative(description)}>
          <DeleteAlternativeButtonIcon className="fas fa-trash" />
        </DeleteAlternativeButton>
      </NewQuestionAlternativeActions>
    </NewQuestionAlternativeCardBox>
  );
};

export default NewQuestionAlternativeCard;
