import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const DuelActionsBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;
export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background: ${({ theme }) => theme.colors.boxColor};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
`;
export const OwnerName = styled(paragraph)``;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 50px;
  width: max-content;
  color: ${({ theme }) => theme.colors.textColor};

  @media (max-width: 900px) {
    width: 100%;
    gap: unset;
  }
`;
export const DuelActionsBarButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  min-height: 50px;
  min-width: 50px;
  padding: 0 20px;

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 0px 10px;
  }

  @media (max-width: 600px) {
    padding: 0px;

    p {
      display: none;
    }
  }
`;
export const DuelActionsBarButtonLabel = styled(paragraph)``;
export const DuelActionsBarLabel = styled(paragraph)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  padding: 0 20px;

  background: ${({ theme }) => theme.colors.boxColor};
`;
