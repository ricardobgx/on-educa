import styled from 'styled-components';
import { inputText } from '../../../../components';

export const Container = styled.div`
  width: 100%;
  animation: leftSlideFadeIn 0.2s linear;
  opacity: 0;
  animation-fill-mode: forwards;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const InputBox = styled.div`
  position: relative;
`;

export const Input = styled(inputText)`
  width: 100%;
  height: 50px;
  padding: 20px 15px;
  color: #bbbbbb;
  background: ${({ theme }) => theme.colors.boxColor};
  border: 2px solid ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  margin: 5px 0;
  transition: all 0.4s linear;

  &:focus {
    border-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.textColor};
    padding-top: 20px;
  }

  &:focus ~ label {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 0.8rem;
    top: 15%;
    transform: translateY(0%);
    font-size: 2vh;

    @media (min-width: 600px) and (max-width: 1150px) {
      font-size: 2vw;
    }

    @media (max-width: 600px) {
      font-size: 3.5vw;
    }
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #bbbbbb;
  transition: all 0.2s linear;
  cursor: text;
  font-size: ${({ theme }) => theme.fontsSize.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;
