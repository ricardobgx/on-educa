/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { NewDuelSettingOption } from '../../NewDuel/NewDuelSetting/styles';
import {
  NewQuestionReferenceBox,
  NewQuestionReferenceLabel,
  NewQuestionReferenceSelectOption,
  NewQuestionReferenceSelect,
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
      <NewQuestionReferenceSelect
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setOption(event.target.value)
        }
      >
        {options.map((option) => (
          <NewQuestionReferenceSelectOption value={option.id}>
            {option.title}
          </NewQuestionReferenceSelectOption>
        ))}
      </NewQuestionReferenceSelect>
    </NewQuestionReferenceBox>
  );
};

export default NewQuestionReference;
