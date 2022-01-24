import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const NewDuelContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  width: calc(50% - 20px);
  min-height: calc(100vh - 285px);

  @media (max-width: 1150px) {
    min-height: unset;
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const NewDuelContentsLabel = styled(paragraph)`
  font-weight: bold;
`;
