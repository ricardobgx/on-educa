import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../components';

export const SectionLabelBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 1rem;
  margin: 20px;
  display: flex;
  justify-content: center;
  width: calc(100% - 40px);
  position: relative;
`;
export const SectionLabelText = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const SectionLabelBackLink = styled(Link)`
  position: absolute;
  left: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SectionLabelBackLinkIcon = styled.i`
  font-size: ${({ theme }) => theme.fontsSize.computer};
`;
