import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../components';

export const UserCardBox = styled.div`
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

export const UserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

// Informações do estudante

export const UserDetails = styled.div`
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

export const UserName = styled(paragraph)`
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

export const UserScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

// XP

export const UserExperience = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  height: 25px;
  display: flex;
  align-items: flex-end;
`;

// Liga

export const UserLeague = styled.i`
  font-size: 20px;
  color: gold;
  height: 25px;
`;
