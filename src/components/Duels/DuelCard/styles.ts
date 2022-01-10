import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { paragraph } from '../../../global/styles/components/textComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const DuelCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;

  &:last-of-type {
    margin: 0;
  }

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: unset;
  }
`;
export const DuelDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;

  @media (max-width: 900px) {
    width: unset;
  }
`;
export const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 1150px) {
    /* justify-content: center; */
  }
`;
export const OwnerPicture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  /* border: 2px solid ${({ theme }) => theme.colors.textColor}; */
`;
export const OwnerName = styled(paragraph)`
  font-weight: bold;
`;
export const DuelCode = styled(paragraph)``;
export const DuelContents = styled(DuelDetails)`
  align-items: center;

  @media (max-width: 900px) {
    margin: 20px 0;
    align-items: flex-start;
  }
`;
export const SubjectsName = styled(paragraph)`
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 1150px) {
    text-align: left;
  }
`;
export const ContentsName = styled(paragraph)`
  text-align: center;

  @media (max-width: 1150px) {
    text-align: left;
  }
`;
export const DuelStatus = styled(DuelDetails)`
  align-items: flex-end;

  @media (max-width: 1150px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const DuelStatusBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 1150px) {
    margin: 0;
  }
`;
export const DuelStatusLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const DuelStatusIcon = styled(smallIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.boxColor};
  background: ${({ theme }) => theme.colors.textColor};
  border-radius: 50%;
`;
export const DuelParticipants = styled.div`
  display: flex;
  align-items: center;
`;
export const DuelParticipantsLabel = styled(paragraph)`
  margin-right: 10px;
`;
export const DuelParticipantsIcon = styled(smallIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.textColor};
`;
