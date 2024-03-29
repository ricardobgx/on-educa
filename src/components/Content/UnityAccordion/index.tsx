/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getContentsByUnity } from '../../../functions/content';
import OnEducaAPI from '../../../services/api';
import { RootState } from '../../../store';
import SuppliesAccordionCheckBox from '../../App/Supplies/SuppliesAccordion/SuppliesAccordionCheckBox';
import SuppliesAccordionToggleCheckBox from '../../App/Supplies/SuppliesAccordion/SuppliesAccordionToggleCheckBox';
import {
  UnityAccordionBox,
  HiddenContent,
  HiddenContentLabel,
  HiddenContents,
  HiddenContentsBox,
} from './styles';

const UnityAccordion = (props: IUnity): JSX.Element => {
  /* GlobalRootState */

  const { aplication, content: contentNow } = useSelector(
    (store: RootState) => store,
  );
  const { token } = aplication;

  const { id, name } = props;
  const [contents, setContents] = useState<IContent[]>([]);

  useEffect(() => {
    getContentsByUnity(OnEducaAPI, id, setContents, token);
  }, []);

  return (
    <UnityAccordionBox>
      <SuppliesAccordionCheckBox id={`unity-${id}`} />
      <SuppliesAccordionToggleCheckBox label={name} id={`unity-${id}`} />
      <HiddenContents>
        {contents.length > 0 && (
          <HiddenContentsBox>
            {contents.map((content: IContent) => (
              <HiddenContent
                className={`block-shadow-button secondary-action bd-rd-20 ${
                  contentNow.id === content.id && 'selected'
                }`}
                key={content.name}
                to={`/contents/${content.id}`}
              >
                <HiddenContentLabel>{content.name}</HiddenContentLabel>
              </HiddenContent>
            ))}
          </HiddenContentsBox>
        )}
      </HiddenContents>
    </UnityAccordionBox>
  );
};

export default UnityAccordion;
