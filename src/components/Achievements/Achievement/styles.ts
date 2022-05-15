import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const AchievementBox = styled.div`
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

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
  gap: 5px;

  width: 100%;
`;
export const AchievementName = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`;
export const AchievementDescriptionLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
`;
