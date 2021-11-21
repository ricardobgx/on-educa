import styled from 'styled-components';
import { paragraph } from '../../../components';

export const AttachmentCardBox = styled.a`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 10px;
  margin: 10px 5px 10px 5px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const AttachmentCardIcon = styled.i`
  margin-right: 10px;
`;
export const AttachmentCardLabel = styled(paragraph)``;
