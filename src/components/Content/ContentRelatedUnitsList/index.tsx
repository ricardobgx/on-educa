/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IUnity } from '../../../interfaces/IUnity';
import UnityAccordion from '../UnityAccordion';
import { ContentRelatedUnitsListBox } from './styles';

interface IContentRelatedUnitsListProps {
  units: IUnity[];
}

const ContentRelatedUnitsList = (
  props: IContentRelatedUnitsListProps,
): JSX.Element => {
  const { units } = props;

  return (
    <ContentRelatedUnitsListBox>
      {units.map((unity: IUnity) => (
        <UnityAccordion key={unity.id} {...unity} />
      ))}
    </ContentRelatedUnitsListBox>
  );
};
export default ContentRelatedUnitsList;
