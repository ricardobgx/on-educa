/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { SuppliesReferenceBox } from '../styles';
import SuppliesContentReferenceSelect from '../SuppliesContentReferenceSelect';
import SuppliesReferenceBoxLabel from '../SuppliesReferenceBoxLabel';

interface ISuppliesContentReferenceProps {
  label: string;
  unity: IUnity;
  selectedContent: IContent;
  setSelectedContent: (selectedContent: IContent) => void;
}

const SuppliesContentReference = (
  props: ISuppliesContentReferenceProps,
): JSX.Element => {
  /* Props */

  const { label, unity, selectedContent, setSelectedContent } = props;

  return (
    <SuppliesReferenceBox>
      <SuppliesReferenceBoxLabel label={label} />
      <SuppliesContentReferenceSelect
        unity={unity}
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
      />
    </SuppliesReferenceBox>
  );
};

export default SuppliesContentReference;
