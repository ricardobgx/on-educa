import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputText } from '../../../global/styles/components/inputComponents';

export const NewDoubtCommentBox = styled.div`
  display: flex;
  width: 100%;
`;
export const NewDoubtCommentInput = styled(inputText)`
  width: 100%;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  background: ${({ theme }) => theme.colors.boxColor};
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const NewDoubtCommentButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};

  &:hover {
    background: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.boxColor};
  }
`;
export const NewDoubtCommentButtonIcon = styled(smallIcon)``;
