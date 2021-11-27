import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    padding: 0.5rem 1rem;
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
export const RankingBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: calc(100vh - 225px);
  max-height: calc(100vh - 225px);
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};

  @media (max-width: 1150px) {
    min-height: calc((85px + 20px) * 4 + 20px);
    max-height: calc((85px + 20px) * 4 + 20px);
  }
`;

// Posições dos estudantes no ranking

export const RankingPosition = styled(paragraph)`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 85px;
  padding: 0px 10px;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};

  @media (max-width: 1150px) {
    min-height: unset;
    height: 80px;
    padding: 10px;
  }
`;

// Estudantes no ranking

export const Students = styled.div``;

// Estudante e sua posição

export const Student = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  padding: 10px;
`;

// Estudante

export const StudentBox = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};

  @media (max-width: 1150px) {
    min-height: unset;
  }
`;

// Foto de perfil

export const StudentPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

// Informações do estudante

export const StudentInfo = styled.div`
  display: flex;
`;
export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.75rem;
  height: 50px;
`;

// Nome

export const StudentName = styled(paragraph)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`;

// Série

export const StudentGrade = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 1rem;
`;

// Liga e pontuação

export const StudentScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

// XP

export const StudentExperience = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  height: 25px;
  display: flex;
  align-items: flex-end;
`;

// Liga

export const StudentLeague = styled.i`
  font-size: 20px;
  color: gold;
  height: 25px;
`;
