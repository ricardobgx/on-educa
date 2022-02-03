import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../global/styles/components/textComponents';

export const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;
  width: calc(100% - 80px);
`;
export const PracticePerformanceBox = styled.div`
  display: flex;
  width: calc(100vw - 40px);

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;
export const PerformancePageImageBox = styled.div`
  width: calc(50vw - 40px);
  margin: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 1150px) {
    display: none;
  }
`;
export const PerformancePageImage = styled.img`
  height: calc(100vh -220px);
`;
export const PerformanceDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(50vw - 40px);
  height: calc(100vh - 95px);
  max-height: calc(100vh - 95px);

  @media (max-width: 600px) {
    height: unset;
  }
`;
export const PerformanceDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  height: 100%;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
`;
export const PracticePerformanceChartBox = styled.div`
  width: 100%;
  height: 100%;
`;
export const PerformanceType = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const PerformanceTypeBox = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px 0;
  padding-bottom: 0;
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
  color: ${({ theme }) => theme.colors.textColor};
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
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  width: calc(100% - 40px);
`;
export const NextContentButtonLabel = styled(paragraph)``;
