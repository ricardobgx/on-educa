import styled from 'styled-components';
import { bigIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  padding: 15px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textColors.primaryColor};
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }

  & span {
    margin-right: 15px;
  }
`;
export const MissionIcon = styled(bigIcon)`
  margin-right: 20px;
  font-size: 40px;
`;
export const MissionInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MissionInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const MissionTitle = styled(paragraph)`
  font-weight: bold;
`;
export const MissionReward = styled(paragraph)``;
export const MissionProgress = styled.div``;
