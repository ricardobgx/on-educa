import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const NewDuelContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
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
