import React, { useState } from 'react';
import { RequiredField } from '../../../global/styles/components/textComponents';
import { NewQuestionBoxLabel } from '../../../pages/NewQuestion/styles';
import NewQuestionAlternativeCard from '../NewQuestionAlternativeCard';
import {
  NewQuestionAlternativesBox,
  NewQuestionAlternativesList,
  NewQuestionAlternativesListBox,
  NewAttachment,
  NewAttachmentInput,
  NewAttachmentButton,
  NewAttachmentButtonIcon,
} from './styles';

interface INewQuestionAlternativesProps {
  alternativesDescriptions: string[];
  setAlternativesDescriptions: (alternativesDescription: string[]) => void;
  rightAlternativeDescription: string;
  setRightAlternativeDescription: (value: string) => void;
}

const NewQuestionAlternatives = (
  props: INewQuestionAlternativesProps,
): JSX.Element => {
  /* Local State */

  const [newAlternative, setNewAlternative] = useState('');

  const {
    alternativesDescriptions,
    setAlternativesDescriptions,
    rightAlternativeDescription,
    setRightAlternativeDescription,
  } = props;

  const addAlternative = (description: string): void => {
    const foundAlternative = alternativesDescriptions.find(
      (alternativeDescription) => alternativeDescription === description,
    );

    if (!foundAlternative && description.trim() !== '') {
      setAlternativesDescriptions([...alternativesDescriptions, description]);
    }

    setNewAlternative('');
  };

  const deleteAlternative = (description: string): void => {
    setAlternativesDescriptions(
      alternativesDescriptions.filter(
        (alternativeDescription) => alternativeDescription !== description,
      ),
    );
  };

  return (
    <NewQuestionAlternativesBox className="with-shadow bd-rd-5">
      <NewQuestionBoxLabel>
        Alternativas<RequiredField>*</RequiredField>
      </NewQuestionBoxLabel>
      <NewQuestionAlternativesList>
        <NewQuestionAlternativesListBox>
          {alternativesDescriptions.map((alternativeDescription) => (
            <NewQuestionAlternativeCard
              key={alternativeDescription}
              description={alternativeDescription}
              deleteAlternative={deleteAlternative}
              rightAlternative={rightAlternativeDescription}
              setRightAlternative={setRightAlternativeDescription}
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
