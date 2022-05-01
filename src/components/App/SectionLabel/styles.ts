import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';
import { Button } from '../../../global/styles/components/buttonComponents';

export const SectionLabelBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 30px;
  min-height: 45px;
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
export const SectionLabelBackLink = styled(Button)`
  position: absolute;
  left: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  background: none;
  box-shadow: none;
`;
export const SectionLabelBackLinkIcon = styled(smallIcon)``;
