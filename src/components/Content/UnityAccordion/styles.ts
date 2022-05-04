import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const UnityAccordionBox = styled.div`
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.boxColor};
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  height: min-content;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const HiddenContents = styled.div`
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: all 0.4s linear;
`;
export const HiddenContentsBox = styled.div`
  overflow: auto;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  max-height: 250px;
`;
export const HiddenContent = styled(Link)`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  transition: all 0.2s linear;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const HiddenContentLabel = styled(paragraph)`
  transition: all 0.2s linear;
`;
