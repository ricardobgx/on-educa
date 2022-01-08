import styled from 'styled-components';
import { bigIcon } from '../../../global/styles/components/iconComponents';
import { paragraph } from '../../../global/styles/components/textComponents';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const MissionIcon = styled(bigIcon)`
  margin-right: 20px;
`;
export const MissionInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MissionInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const MissionTitle = styled(paragraph)`
  font-weight: bold;
`;
export const MissionReward = styled(paragraph)``;
export const MissionProgress = styled.div``;
