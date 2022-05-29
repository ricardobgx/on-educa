import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const PerformanceLinkBox = styled(Link)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};

  padding: 20px;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 7px;

  transition: all 0.2s linear;
`;
export const PerformanceLinkLabel = styled(paragraph)`
  font-weight: bold;
`;
