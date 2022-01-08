/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getContentsByUnity } from '../../../functions/content';
import theme from '../../../global/styles/theme';
import { IContent } from '../../../interfaces/IContent';
import { IUnity } from '../../../interfaces/IUnity';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
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
  /* Global State */

  const { aplication, content: contentNow } = useSelector(
    (store: State) => store,
  );
  const { token } = aplication;

  const { id, title } = props;
  const [contents, setContents] = useState<IContent[]>([]);

  useEffect(() => {
    getContentsByUnity(OnEducaAPI, id, setContents, token);
  }, []);

  return (
    <UnityAccordionBox>
      <SuppliesAccordionCheckBox id={`unity-${id}`} />
      <SuppliesAccordionToggleCheckBox label={title} id={`unity-${id}`} />
      <HiddenContents>
        {contents.length > 0 && (
          <HiddenContentsBox>
            {contents.map((content: IContent) => (
              <HiddenContent
                style={{
                  background:
                    contentNow.id === content.id ? theme.colors.textColor : '',
                }}
                key={content.title}
                to={`/contents/${content.id}`}
              >
                <HiddenContentLabel
                  style={{
                    color:
                      contentNow.id === content.id ? theme.colors.boxColor : '',
                  }}
                >
                  {content.title}
                </HiddenContentLabel>
              </HiddenContent>
            ))}
          </HiddenContentsBox>
        )}
      </HiddenContents>
    </UnityAccordionBox>
  );
};

export default UnityAccordion;
