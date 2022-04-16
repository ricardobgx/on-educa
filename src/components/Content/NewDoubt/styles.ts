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
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
`;
export const NewDoubtButton = styled(Button)`
  min-width: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const NewDoubtButtonIcon = styled.i``;
