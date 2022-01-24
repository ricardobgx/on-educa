import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const UnityAccordionBox = styled.div`
  padding: 10px 15px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
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
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s linear;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const HiddenContentLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 0.2s linear;
`;
