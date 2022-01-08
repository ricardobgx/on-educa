import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  width: calc(100vw - 40px);

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const PerformancePageImage = styled.img`
  width: 50%;
  margin: 20px;

  @media (max-width: 1150px) {
    width: calc(100vw - 80px);
  }
`;
export const PerformanceDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 55px - 40px);

  @media (max-width: 600px) {
    height: unset;
  }
`;
export const PerformanceDetailsBox = styled.div`
  margin: 0 20px;
`;
export const PerformanceType = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PerformanceTypeLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const PerformanceTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
`;
export const PerformanceDataBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TotalLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const NewContentLabel = styled(paragraph)`
  color: ${({ theme }) => theme.similarColors.rightQuestion};
  /* font-weight: bold; */
  margin-bottom: 20px;
`;
export const RightQuestionsLabel = styled(paragraph)`
  color: ${({ theme }) => theme.similarColors.rightQuestion};
  /* font-weight: bold; */
`;
export const WrongQuestionsLabel = styled(paragraph)`
  color: ${({ theme }) => theme.similarColors.wrongQuestion};
  /* font-weight: bold; */
  margin: 20px 0;
`;
export const SkippedQuestionsLabel = styled(paragraph)`
  color: ${({ theme }) => theme.similarColors.skippedQuestion};
  /* font-weight: bold; */
  margin-bottom: 20px;
`;
export const NextContentButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  margin: 20px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
`;
export const NextContentButtonLabel = styled(paragraph)`
  /* font-weight: bold; */
`;
