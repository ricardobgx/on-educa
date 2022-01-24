import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-height: calc(100vh - 95px);

  @media (max-width: 1150px) {
    width: 100%;
    min-height: unset;
  }
`;
export const CustomReviewsLabel = styled(paragraph)`
  margin: 5px;
  margin-bottom: 15px;
  font-weight: bold;
`;
export const CustomReviewsList = styled.div`
  width: calc(100% - 40px);
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  padding: 15px;
  margin: 20px;
`;
export const CustomReviewsListBox = styled.div`
  min-height: calc(100vh - 255px);
  max-height: calc(100vh - 255px);
  overflow: auto;
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: unset;
    max-height: 350px;
  }
`;
