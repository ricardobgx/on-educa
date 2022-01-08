import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ParticipantCardBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ParticipantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
`;
export const ParticipantPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const ParticipantDetails = styled.div`
  display: flex;
`;
export const ParticipantDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColor};
  margin-right: 20px;
`;
export const ParticipantName = styled(paragraph)`
  font-weight: bold;
  height: 25px;
  display: flex;
  align-items: flex-start;
`;
export const ParticipantSchoolGrade = styled(paragraph)`
  height: 25px;
  display: flex;
  align-items: flex-end;
`;
export const ParticipantLeague = styled.i`
  font-size: 35px;
  color: ${({ color }) => color};
`;
export const KickOutButton = styled.button`
  color: ${({ theme }) => theme.colors.whiteColor};
  background: ${({ theme }) => theme.similarColors.warningColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  min-width: 40px;
  min-height: 30px;
  border: none;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin: 0;
    margin-top: 10px;
  }
`;
export const KickOutButtonIcon = styled.i`
  font-size: 1rem;
`;
