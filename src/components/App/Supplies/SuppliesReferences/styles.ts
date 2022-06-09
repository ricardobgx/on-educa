import styled from 'styled-components';
import { inputSelect } from '../../../../global/styles/components/inputComponents';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const SuppliesReferenceBox = styled.div`
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const SuppliesReferenceLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
`;
export const SuppliesReferenceSelect = styled(inputSelect)`
  height: 40px;
  width: 100%;
  min-width: 300px;
  border: none;
  padding: 0 10px;
  border-right: 10px solid transparent;
  cursor: pointer;
`;
export const SuppliesReferenceSelectOption = styled.option``;
