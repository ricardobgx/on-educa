import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
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
      <NewQuestionAlternativeDetails className="with-shadow bd-rd-20">
        <NewQuestionAlternativeDescription>
          {description}
        </NewQuestionAlternativeDescription>
      </NewQuestionAlternativeDetails>
      <NewQuestionAlternativeActions>
        <RightAlternativeButton
          className={`block-shadow-button right-action bd-rd-20 ${
            rightAlternative === description && 'selected'
          }`}
          onClick={() => setRightAlternative(description)}
        >
          <RightAlternativeButtonIcon className="fas fa-check" />
        </RightAlternativeButton>
        <DeleteAlternativeButton
          className="block-shadow-button danger-action bd-rd-20"
          onClick={() => deleteAlternative(description)}
        >
          <SmallMaterialIconOutlined icon="delete" color="" />
        </DeleteAlternativeButton>
      </NewQuestionAlternativeActions>
    </NewQuestionAlternativeCardBox>
  );
};

export default NewQuestionAlternativeCard;
