import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlockShadowButton } from '../../../../global/styles/components/buttonComponents';
import { inputText } from '../../../../global/styles/components/inputComponents';

export const SignFormsBox = styled.div`
  &.forms {
    display: flex;
    align-items: flex-start;

    @media (max-width: 900px) {
      height: 100vh;
      padding-top: 120px;
    }
  }
`;
export const SignFormWrapper = styled.div`
  &.form-wrapper {
    animation: hideLayer 0.3s ease-out forwards;
  }

  &.form-wrapper.is-active {
    animation: showLayer 0.3s ease-in forwards;
  }

  &.form-wrapper.is-active .signin-label {
    color: #fff;
    transform: translateX(115px);
  }

  &.form-wrapper.is-active .signup-label {
    color: #fff;
    transform: translateX(-115px);
  }

  &.form-wrapper.is-active .underline::before {
    transform: translateX(0);
  }

  &.form-wrapper.is-active .form-login {
    animation: showLogin 0.3s ease-in forwards;
  }

  &.form-wrapper.is-active .form-signup {
    animation: showSignup 0.3s ease-in forwards;
  }

  &.form-wrapper.is-active .sign-form-fields {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.4s ease-in, transform 0.35s ease-in;
  }

  &.form-wrapper.is-active .form button {
    opacity: 1;
    transform: translateX(0);
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
  font-size: 16px;
  letter-spacing: 0.5px;

  color: #ffffff;
  background-color: transparent;

  border: none;

  outline: none;

  transform: translateX(0);

  transition: all 0.3s ease-out;

  &.signin-label .underline::before {
    transform: translateX(101%);
  }

  &.signup-label .underline::before {
    transform: translateX(-101%);
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
  &.form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 330px;
    margin-top: 50px;
    padding: 30px;
    transform-origin: top;
  }

  &.form-login {
    animation: hideLogin 0.3s ease-out forwards;
  }

  &.form-signup {
    animation: hideSignup 0.3s ease-out forwards;
  }

  &.form .sign-form-fields {
    position: relative;
    opacity: 0;
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

  &.form button {
    opacity: 0;
    display: block;
    border: none;
  }

  &.form-signup button {
    transform: translateX(30%);
  }

  &.form-login button {
    transform: translateX(-30%);
  }
`;
export const SignInFormBox = styled.div``;
export const SignUpFormBox = styled.div``;
export const SignFormFields = styled.div`
  opacity: 0;
`;
export const SignFormField = styled.div`
  &.input-block {
    margin-bottom: 10px;
  }

  &.input-block label {
    font-size: 14px;
    color: #bfbfbf;
  }

  &.input-block input {
    display: block;

    width: 100%;
    padding: 10px 15px;

    border: none;
    border-radius: 10px;
  }
`;
export const SignFormFieldLabel = styled.label``;
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

  font-size: 16px;

  color: #ffffff;
  background: #6c63ff;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 0px 3px #4138c7;

  cursor: pointer;

  transition: all 0.2s linear;

  :hover {
    box-shadow: 0px 0px 0px 1px #4138c7;
  }

  &.btn-switch {
    color: #6c63ff;
    background: #ffffff;

    box-shadow: 0px 2px 0px 3px rgba(0, 0, 0, 0.1);

    :hover {
      box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const SignFormButtonLabel = styled.p`
  transition: all 0.2s linear;
`;
