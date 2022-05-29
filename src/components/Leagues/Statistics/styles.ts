import styled from 'styled-components';
import {
  paragraph,
  smallParagraph,
} from '../../../global/styles/components/textComponents';

export const LeaguesRankingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  padding: 20px;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};
`;

export const LeaguesRankingLabel = styled(paragraph)`
  font-weight: bold;
`;

export const LeaguesRankingLeagues = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`;

export const RankingLeague = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const PreviousLeague = styled(RankingLeague)``;
export const CurrentLeague = styled(RankingLeague)`
  & > div {
    transform: scale(1.25);
  }
`;
export const NextLeague = styled(RankingLeague)``;
export const LeagueName = styled(smallParagraph)`
  font-weight: bold;
`;
