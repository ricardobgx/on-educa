import React from 'react';
import { SuppliesReferenceBox } from '../styles';
import SuppliesReferenceBoxLabel from '../SuppliesReferenceBoxLabel';
import SuppliesUnityReferenceSelect from '../SuppliesUnityReferenceSelect';

interface ISuppliesUnityReferenceProps {
  label: string;
  subject: ISubject;
  selectedUnity: IUnity;
  setSelectedUnity: (selectedUnity: IUnity) => void;
}

const SuppliesUnityReference = (
  props: ISuppliesUnityReferenceProps,
): JSX.Element => {
  /* Props */

  const { label, subject, selectedUnity, setSelectedUnity } = props;

  return (
    <SuppliesReferenceBox>
      <SuppliesReferenceBoxLabel label={label} />
      <SuppliesUnityReferenceSelect
        subject={subject}
        selectedUnity={selectedUnity}
        setSelectedUnity={setSelectedUnity}
      />
    </SuppliesReferenceBox>
  );
};

export default SuppliesUnityReference;
