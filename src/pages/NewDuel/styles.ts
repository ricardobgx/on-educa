import styled from 'styled-components';
import { Button } from '../../global/styles/components/buttonComponents';
import { LinkButton } from '../../global/styles/components/linkComponents';
import { paragraph } from '../../global/styles/components/textComponents';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const NewDuelBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  margin: 20px;
`;
export const NewDuelDetails = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const NewDuelActions = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const CancelNewDuelButton = styled(LinkButton)`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const CancelNewDuelButtonLabel = styled(paragraph)``;
export const CreateNewDuelButton = styled(Button)`
  justify-content: center;

  background: ${({ theme }) => theme.colors.textColors.primaryColor};
  color: ${({ theme }) => theme.colors.boxColor};

  width: calc(50% - 20px);

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const CreateNewDuelButtonLabel = styled(paragraph)``;
