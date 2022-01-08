import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const AccordionHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const AccordionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const AccordionToggleLabel = styled.label``;
export const AccordionToggleIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColor};
`;
