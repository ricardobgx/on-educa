import styled from 'styled-components';

export const ChatPeoplePictureBox = styled.div`
  position: relative;
  margin-right: 10px;
  width: max-content;
  height: max-content;
`;
export const ChatPeoplePictureImg = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;
export const ChatPeopleIsOnline = styled.div`
  position: absolute;
  bottom: 2%;
  right: 0%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: 3px solid ${({ theme }) => theme.colors.boxColor};
`;
