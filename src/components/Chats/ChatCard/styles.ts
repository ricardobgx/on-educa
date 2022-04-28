import styled from 'styled-components';
import { paragraph } from '../../../global/styles/components/textComponents';

export const ChatCardBox = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.colors.boxColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  transition: all 0.2s linear;

  &:last-of-type {
    margin-bottom: 0;
  }

  :hover,
  &.selected {
    background: #f1f1f1;
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
export const LastMessagePreview = styled(paragraph)`
  font-size: 14px;
`;
