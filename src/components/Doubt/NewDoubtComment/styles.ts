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
  background: rgba(0, 0, 0, 0.04);
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textColor};

  ::-webkit-input-placeholder {
    color: #949494;
  }
`;
export const NewDoubtCommentButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const NewDoubtCommentButtonIcon = styled(smallIcon)``;
