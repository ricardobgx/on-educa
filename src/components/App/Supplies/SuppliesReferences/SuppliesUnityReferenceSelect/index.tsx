/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUnitsBySubject } from '../../../../../functions/unity';
import { IUnity } from '../../../../../interfaces/IUnity';
import { ISubject } from '../../../../../interfaces/ISubject';
import OnEducaAPI from '../../../../../services/api';
import { State } from '../../../../../store';
import {
  SuppliesReferenceSelectOption,
  SuppliesReferenceSelect,
} from '../styles';
import { DEFAULT_UNITY } from '../../../../../static/defaultEntitiesValues';
import {
  isDefaultSubject,
  isDefaultUnity,
} from '../../../../../functions/entitiesValues';

interface ISuppliesUnityReferenceSelectProps {
  subject: ISubject;
  selectedUnity: IUnity;
  setSelectedUnity: (selectedUnity: IUnity) => void;
}

const SuppliesUnityReferenceSelect = (
  props: ISuppliesUnityReferenceSelectProps,
): JSX.Element => {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  /* Local State */

  const [units, setUnits] = useState<IUnity[]>([]);

  /* Props */

  const { subject, selectedUnity, setSelectedUnity } = props;

  const searchUnity = (
    subjectUnits: IUnity[],
    id: string,
  ): IUnity | undefined => {
    const foundUnity = subjectUnits.find((unity) => unity.id === id);

    return foundUnity;
  };

  const setDefaultUnity = (foundUnits: IUnity[]): void => {
    setUnits(foundUnits);

    if (foundUnits.length > 0) {
      if (
        isDefaultUnity(selectedUnity) ||
        !searchUnity(foundUnits, selectedUnity.id)
      )
        setSelectedUnity(foundUnits[0]);
    } else if (foundUnits.length === 0) setSelectedUnity(DEFAULT_UNITY);
  };

  useEffect(() => {
    if (!isDefaultSubject(subject))
      getUnitsBySubject(OnEducaAPI, subject.id, setDefaultUnity, token);
    else {
      setSelectedUnity(DEFAULT_UNITY);
      setUnits([]);
    }
  }, [subject]);

  return (
    <SuppliesReferenceSelect
      value={selectedUnity.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedUnity(
          searchUnity(units, event.target.value) || DEFAULT_UNITY,
        )
      }
    >
      {units.map((unity) => (
        <SuppliesReferenceSelectOption key={unity.id} value={unity.id}>
          {unity.title}
        </SuppliesReferenceSelectOption>
      ))}
    </SuppliesReferenceSelect>
  );
};

export default SuppliesUnityReferenceSelect;
