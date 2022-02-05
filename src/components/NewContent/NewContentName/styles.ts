import styled from 'styled-components';
import {
  DetailBoxInput,
  FlexColumnBox,
} from '../../../pages/NewContent/styles';

export const NewContentNameBox = styled(FlexColumnBox)`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const NameInput = styled(DetailBoxInput)``;
