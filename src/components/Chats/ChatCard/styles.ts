import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChatCardBox = styled.div`
  padding: 15px;
  background: ${({ theme }) => theme.colors.boxColor};
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const PeopleInfo = styled.div`
  display: flex;
`;
export const NameAndLastMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;
export const PeopleName = styled(paragraph)`
  font-weight: bold;
`;
export const LastMessagePreview = styled(paragraph)``;
