import styled from 'styled-components';
import { paragraph, smallIcon } from '../../../components';

export const QuestionsFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 97;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 6px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  animation: fadeIn 0.2s linear;

  @media (max-width: 900px) {
    width: 80%;
  }
`;
export const QuestionsFilterLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  margin: 10px 0;
`;
export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const FiltersBox = styled.div`
  margin: 10px;
`;
export const CloseQuestionsFilterButton = styled.button`
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 50px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
export const CloseQuestionsFilterIcon = styled(smallIcon)`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
