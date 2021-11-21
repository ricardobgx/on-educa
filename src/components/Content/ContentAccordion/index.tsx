import React from 'react';
import { IContent, IUnity } from '../../../pages/Content';
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

interface IContentAccordionProps extends IUnity {
  id: number;
}

const ContentAccordion = (props: IContentAccordionProps): JSX.Element => {
  const { contents, id, title } = props;

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
