import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const QuestionsActionsBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 95;

  @media (max-width: 700px) {
    position: relative;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;
export const QuestionsFiltersButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  color: ${({ theme }) => theme.colors.boxColor};
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  cursor: pointer;

  @media (min-width: 600px) and (max-width: 700px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const QuestionsFiltersButtonLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const QuestionsFiltersButtonIcon = styled(smallIcon)``;
