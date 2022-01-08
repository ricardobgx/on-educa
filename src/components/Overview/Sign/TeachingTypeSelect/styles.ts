import styled from 'styled-components';
import { inputSelect } from '../../../../global/styles/components/inputComponents';

export const TeachingTypeSelectBox = styled(inputSelect)`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  border-right: 10px solid ${({ theme }) => theme.colors.textColor};
  height: 50px;
  width: 100%;
`;
export const TeachingTypeOption = styled.option``;
