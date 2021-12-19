/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { IContent } from '../../../../interfaces/IContent';
import {
  NewSuppliesReferenceBox,
  NewSuppliesReferenceLabel,
  NewSuppliesReferenceSelectOption,
  NewSuppliesReferenceSelect,
} from '../styles';

interface INewSuppliesContentReferenceProps {
  label: string;
  contents: IContent[];
  selectedContent: IContent;
  setSelectedContent: (selectedContent: IContent) => void;
}

const NewSuppliesContentReference = (
  props: INewSuppliesContentReferenceProps,
): JSX.Element => {
  const { label, contents, selectedContent, setSelectedContent } = props;

  const searchContent = (id: string): void => {
    const foundContent = contents.find((content) => content.id === id);

    if (foundContent) setSelectedContent(foundContent);
  };

  return (
    <NewSuppliesReferenceBox>
      <NewSuppliesReferenceLabel>{label}</NewSuppliesReferenceLabel>
      <NewSuppliesReferenceSelect
        value={selectedContent.id}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          searchContent(event.target.value)
        }
      >
        {contents.map((content) => (
          <NewSuppliesReferenceSelectOption value={content.id}>
            {content.title}
          </NewSuppliesReferenceSelectOption>
        ))}
      </NewSuppliesReferenceSelect>
    </NewSuppliesReferenceBox>
  );
};

export default NewSuppliesContentReference;
