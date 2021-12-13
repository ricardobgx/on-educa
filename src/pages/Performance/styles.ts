import styled from 'styled-components';
import { paragraph } from '../../components';

export const PageBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 20px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

/*
 *
 * Desempenho
 *
 */

// Containeres gerais

export const WeekPerformance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const WeekPerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 225px);
  max-height: calc(100vh - 225px);
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  margin: 20px;
  border-radius: 10px;
  width: calc(100% - 40px);

  @media (max-width: 1150px) {
    width: unset;
    min-height: unset;
    max-height: unset;
  }
`;

export const PerformanceCharts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;

  @media (max-width: 1150px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

// Desempenho dos dias da semana

export const WeekDays = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  overflow: auto;

  @media (max-width: 1150px) {
    flex-wrap: nowrap;
    width: calc(100vw - 125px);
    margin: 10px 20px;
    padding: 10px 0;
  }
`;

// Botão para acessar dia da semana

export const WeekDayButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.boxColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textColor};
  min-width: 75px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;

  @media (max-width: 1150px) {
    width: unset;
    margin: 0;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
export const WeekDayLabel = styled(paragraph)``;

/*
 *
 * Ranking
 *
 */

// Containeres gerais

export const Ranking = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1150px) {
    width: 100%;
  }
`;

// Estudantes no ranking

export const UsersList = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
`;
export const UsersListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-height: calc(100vh - 255px);
  max-height: calc(100vh - 255px);
  padding: 5px;

  @media (max-width: 1150px) {
    min-height: calc((85px + 20px) * 4 + 20px);
    max-height: calc((85px + 20px) * 4 + 20px);
  }
`;
