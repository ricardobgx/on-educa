import styled from 'styled-components';
import { inputSelect, paragraph } from '../../../components';
import { DetailBoxLabel } from '../../../pages/NewContent/styles';

export const NewContentReferenceBox = styled.div`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const NewContentReferenceLabel = styled(DetailBoxLabel)``;

export const NewContentReferenceDisplay = styled.div`
  height: 40px;
  width: 100%;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  display: flex;
  padding: 0 10px;
  /* justify-content: center; */
  align-items: center;
`;

export const NewContentReferenceDisplayLabel = styled(paragraph)``;

export const NewContentReferenceSelect = styled(inputSelect)`
  height: 40px;
  width: 100%;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  border-right: 10px solid transparent;
`;

export const NewContentReferenceSelectOption = styled.option``;
