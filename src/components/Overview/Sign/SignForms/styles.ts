import styled from 'styled-components';
import { BlockShadowButton } from '../../../../global/styles/components/buttonComponents';
import { inputText } from '../../../../global/styles/components/inputComponents';
import {
  paragraph,
  smallLabel,
} from '../../../../global/styles/components/textComponents';

export const SignFormsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    height: 100vh;
    width: 100%;

    align-items: center;
    justify-content: center;
  }
`;
export const SignFormLabels = styled.div`
  display: flex;

  width: 100%;

  position: relative;
`;
export const SignFormsWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 900px) {
    position: relative;
    justify-content: center;
    align-items: center;
    /* min-height: 500px; */

    &.login-selected {
      .form-signup {
        transform: perspective(600px) rotateY(180deg) scale(0.5);
      }

      .form-login {
        transform: perspective(600px) rotateY(0deg);
      }
    }

    /* transform: rotateY(180deg); */
  }
`;
export const SignFormLabel = styled.p`
  position: relative;

  width: max-content;
  margin-right: auto;
  margin-left: auto;
  padding: 0;

  display: block;

  text-transform: uppercase;
  font-family: inherit;
  letter-spacing: 0.5px;

  color: #ffffff;
  background-color: transparent;

  border: none;

  outline: none;

  transform: translateX(0);

  transition: all 0.3s ease-out;

  @media (min-width: 900px) {
    &.signin-label .underline::before {
      transform: translateX(101%);
    }

    &.signup-label .underline::before {
      transform: translateX(-101%);
    }

    &.signin-label.is-active {
      color: #fff;
      transform: translateX(115px);
    }

    &.signup-label.is-active {
      color: #fff;
      transform: translateX(-115px);
    }

    &.is-active .underline::before {
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    display: none;
    opacity: 0;
    animation: 0.4s fadeIn linear forwards;
    animation-delay: 0.3s;

    &.is-active {
      display: unset;

      &.signin-label {
        transform: translateY(40px);
      }
    }
  }
`;
export const Underline = styled.span`
  &.underline {
    position: absolute;
    left: 0;
    bottom: -5px;

    overflow: hidden;

    pointer-events: none;

    width: 100%;
    height: 2px;
  }

  &.underline::before {
    content: '';
    position: absolute;
    top: 0;
    left: inherit;
    display: block;
    width: inherit;
    height: inherit;
    background-color: currentColor;
    transition: transform 0.2s ease-out;
  }
`;
export const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 330px;
  margin-top: 50px;
  padding: 30px;
  transform-origin: top;
  background: ${({ theme }) => theme.colors.boxColor};
  backface-visibility: hidden;
  animation: hideLayer 0.3s ease-out forwards;

  & button {
    display: block;
    border: none;
  }

  @media (min-width: 900px) {
    &.form-login {
      animation: hideLogin 0.3s ease-out forwards;
    }

    &.form-signup {
      animation: hideSignup 0.3s ease-out forwards;
    }

    &.form .sign-form-fields {
      position: relative;
      padding: 0;
      border: 0;
      transition: all 0.3s ease-out;
    }

    &.form-login .sign-form-fields {
      transform: translateX(-50%);
    }

    &.form-signup .sign-form-fields {
      transform: translateX(50%);
    }

    &.form-signup button {
      transform: translateX(30%);
    }

    &.form-login button {
      transform: translateX(-30%);
    }

    &.is-active {
      &.form-login {
        animation: showLayer 0.3s ease-in forwards,
          showLogin 0.3s ease-in forwards;
      }

      &.form-signup {
        animation: showLayer 0.3s ease-in forwards,
          showSignup 0.3s ease-in forwards;
      }
    }

    &.is-active .sign-form-fields,
    &.is-active button {
      transform: translateX(0);
      transition: opacity 0.4s ease-in, transform 0.35s ease-in;
    }

    &.is-not-active button,
    &.is-not-active .sign-form-fields {
      opacity: 0 !important;
      pointer-events: none !important;
    }
  }

  @media (max-width: 900px) {
    transition: all 0.4s linear;

    &.form-signup {
      transform: perspective(600px) rotateY(0deg);
    }

    &.form-login {
      position: absolute;
      transform: perspective(600px) rotateY(-180deg);
    }
  }
`;
export const SignInFormBox = styled.div``;
export const SignUpFormBox = styled.div``;
export const SignFormFields = styled.div``;
export const SignFormField = styled.div`
  &.input-block {
    margin-bottom: 10px;
  }

  &.input-block label {
    color: #bfbfbf;
  }

  &.input-block input {
    display: block;

    width: 100%;
    padding: 10px 15px;

    border: none;
  }
`;
export const SignFormFieldLabel = styled(smallLabel)``;
export const SignFormFieldInputBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.inputTextBgColor};
  border-radius: 30px;

  position: relative;
`;
export const SignFormFieldInput = styled(inputText)`
  color: ${({ theme }) => theme.colors.textColor};
  background: none;
`;
export const SignFormButton = styled(BlockShadowButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 100%;
  margin-top: 20px;

  border: none;

  cursor: pointer;
`;

export const SignFormButtonLabel = styled(paragraph)``;
