import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../components';

export const ContentAccordionBox = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const AccordionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const AccordionToggleLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 5px;
`;
export const AccordionToggleIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 0.2s linear;
`;
export const AccordionToggleCheckBox = styled.input`
  display: none;

  &:checked ~ label i {
    transition: all 0.2s linear;
    transform: rotateZ(90deg);
  }

  &:checked ~ div {
    transition: all 0.4s linear;
    height: 250px;
  }
`;
export const HiddenContents = styled.div`
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: all 0.4s linear;
  display: flex;
  flex-direction: column;
`;
export const HiddenContentsBox = styled.div`
  overflow: auto;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;
export const HiddenContent = styled(Link)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const HiddenContentLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
