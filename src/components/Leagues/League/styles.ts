import styled from 'styled-components';

export const LeagueBox = styled.div<ILeagueColors>`
  width: 30px;
  height: 30px;

  background: ${({ backgroundColors }) =>
    backgroundColors.length > 1
      ? `linear(135deg, ${backgroundColors[0]}, ${backgroundColors[1]})`
      : `${backgroundColors[0]}`};
  border: 3px solid ${({ borderColor }) => borderColor};

  border-radius: 15px;
`;
export const LeagueLevels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 2px; */

  width: 100%;
  height: 100%;

  & span {
    color: ${({ theme }) => theme.colors.buttonColors.mainButtonTextColor};
  }

  &.level1 {
    span {
      font-size: 26px;
      width: 14px;
      height: 8px;
    }
  }

  &.level2 {
    span {
      font-size: 24px;
      width: 12px;
      height: 8px;
      margin-top: -2px;
    }
  }

  &.level3 {
    span {
      font-size: 22px;
      width: 10px;
      height: 6px;
      margin-top: -1px;
    }
  }
`;
