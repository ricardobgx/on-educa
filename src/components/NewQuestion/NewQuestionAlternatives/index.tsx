import React, { useState } from 'react';
import NewQuestionAlternativeCard from '../NewQuestionAlternativeCard';
import {
  NewQuestionAlternativesBox,
  NewQuestionAlternativesLabel,
  NewQuestionAlternativesList,
  NewQuestionAlternativesListBox,
  NewAttachment,
  NewAttachmentInput,
  NewAttachmentButton,
  NewAttachmentButtonIcon,
} from './styles';

interface INewQuestionAlternativesProps {
  alternativesDescription: string[];
  setAlternativesDescription: (alternativesDescription: string[]) => void;
}

const NewQuestionAlternatives = (
  props: INewQuestionAlternativesProps,
): JSX.Element => {
  /* Local State */

  const [newAlternative, setNewAlternative] = useState('');
  const [rightAlternative, setRightAlternative] = useState('');

  const { alternativesDescription, setAlternativesDescription } = props;

  const addAlternative = (description: string): void => {
    if (
      !alternativesDescription.find((alt) => alt === description) &&
      description.trim() !== ''
    )
      setAlternativesDescription([...alternativesDescription, description]);

    setNewAlternative('');
  };

  const deleteAlternative = (description: string): void => {
    setAlternativesDescription(
      alternativesDescription.filter(
        (alternativeDescription) => alternativeDescription !== description,
      ),
    );
  };

  return (
    <NewQuestionAlternativesBox>
      <NewQuestionAlternativesLabel>Alternativas</NewQuestionAlternativesLabel>
      <NewQuestionAlternativesList>
        <NewQuestionAlternativesListBox>
          {alternativesDescription.map((alternativeDescription) => (
            <NewQuestionAlternativeCard
              key={alternativeDescription}
              description={alternativeDescription}
              deleteAlternative={deleteAlternative}
              rightAlternative={rightAlternative}
              setRightAlternative={setRightAlternative}
            />
          ))}
        </NewQuestionAlternativesListBox>
      </NewQuestionAlternativesList>
      <NewAttachment>
        <NewAttachmentInput
          type="text"
          placeholder="Digite o conteúdo da alternativa"
          value={newAlternative}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNewAlternative(event.target.value)
          }
          onKeyUp={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') addAlternative(newAlternative);
          }}
        />
        <NewAttachmentButton onClick={() => addAlternative(newAlternative)}>
          <NewAttachmentButtonIcon className="fas fa-plus" />
        </NewAttachmentButton>
      </NewAttachment>
    </NewQuestionAlternativesBox>
  );
};

export default NewQuestionAlternatives;
