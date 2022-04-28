import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';

export const NewDoubtBox = styled.div`
  width: 100%;
  display: flex;
  margin: 0 20px;
  margin-bottom: 20px;
`;
export const NewDoubtInput = styled.textarea`
  width: calc(100% - 90px);
  min-width: calc(100% - 90px);
  max-width: calc(100% - 90px);
  height: 40px;
  min-height: 40px;
  max-height: 250px;
  padding: 10px 10px;
  margin-right: 10px;
  border: none;
  background: #f3f3f3;
  color: ${({ theme }) => theme.colors.textColor};

  ::-webkit-input-placeholder {
    color: #949494;
  }
`;
export const NewDoubtButton = styled(Button)`
  min-width: 40px;
`;
export const NewDoubtButtonIcon = styled.i``;
