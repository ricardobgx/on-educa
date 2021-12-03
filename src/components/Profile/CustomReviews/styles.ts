import styled from 'styled-components';
import { paragraph } from '../../../components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;
export const CustomReviewsLabel = styled(paragraph)`
  margin: 5px;
  margin-bottom: 15px;
  font-weight: bold;
`;
export const CustomReviewsList = styled.div`
  width: 100%;
  height: 100%;
`;
export const CustomReviewsListBox = styled.div`
  min-height: calc(100vh - 210px);
  max-height: calc(100vh - 210px);
  overflow: auto;
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: unset;
    max-height: 300px;
  }
`;
