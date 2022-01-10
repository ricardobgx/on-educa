import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { mediumIcon } from '../../../global/styles/components/iconComponents';

export const SectionLabelBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  position: relative;
  margin: 20px;
`;
export const SectionLabelText = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  text-align: center;
`;
export const SectionLabelBackLink = styled(Link)`
  position: absolute;
  left: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;
export const SectionLabelBackLinkIcon = styled(mediumIcon)``;
