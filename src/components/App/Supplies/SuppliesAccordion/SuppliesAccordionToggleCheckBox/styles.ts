import styled from 'styled-components';
import { smallIcon } from '../../../../../global/styles/components/iconComponents';
import { paragraph } from '../../../../../global/styles/components/textComponents';

export const SuppliesAccordionToggleCheckBoxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 5px;
`;
export const SuppliesAccordionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  font-weight: bold;
`;
export const SuppliesAccordionIcon = styled(smallIcon)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  transition: all 0.2s linear;
`;
