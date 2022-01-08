import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const EditQuestionActionsBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const CancelEditButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  height: 40px;
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
export const CancelEditButtonLabel = styled(paragraph)``;
export const UpdateQuestionButton = styled.button`
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  border: none;
  height: 40px;
  width: calc(50% - 20px);
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.boxColor};
`;
export const UpdateQuestionButtonLabel = styled(paragraph)``;
