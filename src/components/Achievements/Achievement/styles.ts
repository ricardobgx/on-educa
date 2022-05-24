import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const AchievementBox = styled.div`
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  background: ${({ theme }) => theme.colors.boxColor};

  padding: 20px;

  display: flex;
  align-items: center;
  gap: 20px;
`;
export const AchievementLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const AchievementLevelIcon = styled.i`
  font-size: 35px;
  margin-bottom: 10px;
`;
export const AchievementLevelLabel = styled(paragraph)`
  font-weight: bold;
`;
export const AchievementDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;
`;
export const AchievementDescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AchievementProgress = styled(paragraph)``;
export const AchievementName = styled(paragraph)`
  font-weight: bold;
`;
export const AchievementDescriptionLabel = styled(paragraph)``;
