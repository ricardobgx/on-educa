import styled from 'styled-components';

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

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 1rem;
  color: #bbbbbb;
  background: ${({ theme }) => theme.colors.boxColor};
  border: 2px solid ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  margin: 0.25rem 0;
  font-size: 1.1rem;
  transition: all 0.4s linear;

  &:focus {
    border-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.textColor};
    padding-top: 2rem;
  }

  &:focus ~ label {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 0.8rem;
    top: 15%;
    transform: translateY(0%);
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #bbbbbb;
  transition: all 0.2s linear;
  cursor: text;
`;
