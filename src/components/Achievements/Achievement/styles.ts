import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const AchievementBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-of-type {
    margin: 0;
  }
`;
export const AchievementLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-right: 20px;
`;
export const AchievementLevelIcon = styled.i`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 35px;
  margin-bottom: 10px;
`;
export const AchievementLevelLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const AchievementDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AchievementName = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const AchievementProgress = styled.div`
  display: flex;
  align-items: center;
`;
export const AchievementProgressBar = styled.div`
  padding: 2px;
  margin: 5px 0px;
  width: 100%;
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 10px;
`;
export const AchievementInnerProgressBar = styled.div`
  height: 15px;
  width: 50%;
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 10px;
`;
export const AchievementProgressLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  margin-left: 10px;
`;
export const AchievementDescriptionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
