import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LeaguesPeopleRankingCardBox = styled(Link)<ILeagueColors>`
  display: flex;
  width: 100%;

  background: ${({ theme }) => theme.colors.boxColor};
`;
