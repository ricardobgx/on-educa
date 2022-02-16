import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../global/styles/components/buttonComponents';
import { smallIcon } from '../../../global/styles/components/iconComponents';

export const FriendCardBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  opacity: 0;
  animation: 0.2s leftSlideFadeIn linear forwards;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const FriendPeople = styled(Link)`
  width: 100%;
`;
export const SendMessageButton = styled(Button)`
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.boxColor};
  width: 40px;
  margin-left: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.boxColor};
    background: ${({ theme }) => theme.colors.textColor};
  }
`;
export const SendMessageButtonIcon = styled(smallIcon)``;
