/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import {
  NewContentReferenceBox,
  NewContentReferenceLabel,
  NewContentReferenceDisplay,
  NewContentReferenceDisplayLabel,
} from './styles';

interface INewContentReferenceProps {
  label: string;
  value: string;
}

const NewContentReference = (props: INewContentReferenceProps): JSX.Element => {
  const { label, value } = props;

  return (
    <NewContentReferenceBox>
      <NewContentReferenceLabel>{label}</NewContentReferenceLabel>
      <NewContentReferenceDisplay>
        <NewContentReferenceDisplayLabel>
          {value}
        </NewContentReferenceDisplayLabel>
      </NewContentReferenceDisplay>
    </NewContentReferenceBox>
  );
};

export default NewContentReference;
