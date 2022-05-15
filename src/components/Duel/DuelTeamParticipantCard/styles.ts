import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DuelTeamParticipantCardBox = styled.div`
  display: flex;
  gap: 10px;

  margin-bottom: 20px;
  width: 100%;
  animation: fadeIn 0.2s linear;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const PeopleCardWrapperLink = styled(Link)`
  width: 100%;
`;
export const KickOutButton = styled.button`
  min-width: 40px;
  min-height: calc(50% - 5px);
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 0;
    margin-top: 10px;
    min-height: 40px;
    width: 100%;
  }
`;
