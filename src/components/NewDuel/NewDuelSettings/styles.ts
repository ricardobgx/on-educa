import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const NewDuelSettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  width: calc(50% - 20px);
  min-height: calc(100vh - 285px);

  @media (max-width: 1150px) {
    width: 100%;
    min-height: unset;
  }
`;
export const NewDuelSettingsLabel = styled(paragraph)`
  font-weight: bold;
`;
