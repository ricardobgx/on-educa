import styled from 'styled-components';
import { paragraph } from '../../../components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Bar = styled.div`
  height: 19px;
  padding: 2px;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.textColor};
`;
export const InnerBar = styled.div`
  height: 15px;
  background: ${({ theme }) => theme.colors.boxColor};
  transition: 0.2s linear;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const ProgressLabel = styled(paragraph)`
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  min-width: max-content;
`;
