/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import UnityAccordion from '../UnityAccordion';
import { ContentRelatedUnitsListBox } from './styles';

interface IContentRelatedUnitsListProps {
  units: IUnity[];
  isStudent: boolean;
}

const ContentRelatedUnitsList = (
  props: IContentRelatedUnitsListProps,
): JSX.Element => {
  const { units, isStudent } = props;

  return (
    <ContentRelatedUnitsListBox
      style={{
        maxHeight: isStudent ? 'calc(100vh - 350px)' : 'calc(100vh - 290px)',
      }}
      className="with-shadow bd-rd-20"
    >
      {units.map((unity: IUnity) => (
        <UnityAccordion key={unity.id} {...unity} />
      ))}
    </ContentRelatedUnitsListBox>
  );
};
export default ContentRelatedUnitsList;
