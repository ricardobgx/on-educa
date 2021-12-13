/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { IContent } from '../../../interfaces/IContent';
import { IUnity } from '../../../interfaces/IUnity';
import OnEducaAPI from '../../../services/api';
import {
  AccordionLabel,
  AccordionToggleCheckBox,
  AccordionToggleIcon,
  AccordionToggleLabel,
  ContentAccordionBox,
  HiddenContent,
  HiddenContentLabel,
  HiddenContents,
  HiddenContentsBox,
} from './styles';

const ContentAccordion = (props: IUnity): JSX.Element => {
  const { id, title } = props;
  const [contents, setContents] = useState<IContent[]>([]);

  const getContents = async (
    setContentsState: (value: IContent[]) => void,
  ): Promise<void> => {
    await OnEducaAPI.get(`/contents/unity/${id}`).then((contentsResponse) => {
      setContentsState(contentsResponse.data);
    });
  };

  useEffect(() => {
    getContents(setContents);
  }, []);

  return (
    <ContentAccordionBox>
      <AccordionToggleCheckBox type="checkbox" id={`unity-${id}`} />
      <AccordionToggleLabel htmlFor={`unity-${id}`}>
        <AccordionLabel>{title}</AccordionLabel>
        <AccordionToggleIcon className="fas fa-chevron-right" />
      </AccordionToggleLabel>
      <HiddenContents>
        <HiddenContentsBox>
          {contents.map((content: IContent) => (
            <HiddenContent key={content.title} to="/">
              <HiddenContentLabel>{content.title}</HiddenContentLabel>
            </HiddenContent>
          ))}
        </HiddenContentsBox>
      </HiddenContents>
    </ContentAccordionBox>
  );
};

export default ContentAccordion;
