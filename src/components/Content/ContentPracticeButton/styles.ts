import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ContentPracticeButtonBox = styled(Link)`
  background: ${({ theme }) => theme.colors.textColor};
  border: none;
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  margin-top: 20px;
`;
export const ContentPracticeButtonLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.boxColor};
  /* font-weight: bold; */
`;
