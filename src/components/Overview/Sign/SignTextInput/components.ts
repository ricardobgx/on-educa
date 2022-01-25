import styled from 'styled-components';
import { smallIcon } from '../../../../global/styles/components/iconComponents';
import { inputText } from '../../../../global/styles/components/inputComponents';

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
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.boxShadowColor};
  margin: 5px 0;
  padding: 15px 10px;
  padding-bottom: 0px;
  transition: all 0.2s linear;
`;

export const Input = styled(inputText)`
  width: 100%;
  height: 40px;
  padding: 15px;
  color: ${({ theme }) => theme.colors.boxShadowColor};
  border: none;
  background: ${({ theme }) => theme.colors.backgroundColor};
  transition: all 0.4s linear;

  &:focus {
    color: ${({ theme }) => theme.colors.questionTextColor};
    padding-top: 20px;
  }

  &:focus ~ label {
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

  &:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.questionTextColor};
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 60%;
  left: 38px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.boxShadowColor};
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

export const FieldIcon = styled(smallIcon)`
  color: ${({ theme }) => theme.colors.boxShadowColor};
  transition: all 0.2s linear;
`;
