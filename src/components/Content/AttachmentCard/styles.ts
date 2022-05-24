import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const AttachmentCardBox = styled.a`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 10px;
  margin: 10px 5px 10px 5px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
export const AttachmentCardIcon = styled.i`
  margin-right: 10px;
`;
export const AttachmentCardLabel = styled(paragraph)``;
