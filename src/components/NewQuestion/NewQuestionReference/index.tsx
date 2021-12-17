/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import {
  NewQuestionReferenceBox,
  NewQuestionReferenceLabel,
  NewQuestionReferenceDisplay,
  NewQuestionReferenceDisplayLabel,
} from './styles';

interface INewQuestionReferenceProps {
  label: string;
  value: string;
}

const NewQuestionReference = (
  props: INewQuestionReferenceProps,
): JSX.Element => {
  const { label, value } = props;

  return (
    <NewQuestionReferenceBox>
      <NewQuestionReferenceLabel>{label}</NewQuestionReferenceLabel>
      <NewQuestionReferenceDisplay>
        <NewQuestionReferenceDisplayLabel>
          {value}
        </NewQuestionReferenceDisplayLabel>
      </NewQuestionReferenceDisplay>
    </NewQuestionReferenceBox>
  );
};

export default NewQuestionReference;
