import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { inputTextArea } from '../../../global/styles/components/inputComponents';

export const NewDoubtBox = styled.div`
  width: 100%;
  display: flex;
  margin: 0 20px;
  margin-bottom: 20px;
`;
export const NewDoubtInput = styled(inputTextArea)`
  width: calc(100% - 90px);
  min-width: calc(100% - 90px);
  max-width: calc(100% - 90px);
  height: 40px;
  min-height: 40px;
  max-height: 250px;
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.inputTextBgColor};
  color: ${({ theme }) => theme.colors.textColor};

  ::-webkit-input-placeholder {
    color: #949494;
  }
`;
export const NewDoubtButton = styled(Button)`
  min-width: 40px;
`;
export const NewDoubtButtonIcon = styled(smallIcon)``;
