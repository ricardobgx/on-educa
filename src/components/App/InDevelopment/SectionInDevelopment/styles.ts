import styled from 'styled-components';
import { smallIcon } from '../../../../global/styles/components/iconComponents';
import { paragraph } from '../../../../global/styles/components/textComponents';

export const SectionInDevelopmentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  min-height: 40px;

  color: #ffffff;
  background: ${({ theme }) => theme.flagColors.yellowColor};
`;
export const SectionInDevelopmentIcon = styled(smallIcon)``;
export const SectionInDevelopmentLabel = styled(paragraph)``;
