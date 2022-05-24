import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
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

  const { theme } = useSelector((store: RootState) => store);

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
                ? theme.flagColors.greenColor
                : '',
            color:
              rightAlternative === description
                ? theme.colors.textColors.primaryColor
                : '',
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
