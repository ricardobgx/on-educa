import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const PeopleCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  min-height: 85px;
  height: 100%;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};

  @media (max-width: 1150px) {
    min-height: unset;
  }
`;

// Foto de perfil

export const PeoplePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.textColor};
`;

// Informações do estudante

export const PeopleDetails = styled.div`
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

export const PeopleName = styled(paragraph)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
`;

// Série

export const StudentSchoolGrade = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 1rem;
`;

// Disciplinas

export const TeacherSubjects = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 1rem;
`;

// Liga e pontuação

export const PeopleScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

// XP

export const PeopleExperience = styled.p`
  font-size: 13px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textColor};
  height: 25px;
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
`;

// Liga

export const PeopleLeague = styled.i`
  color: gold;
  height: 25px;
  font-size: 25px;
`;
