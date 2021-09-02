import {
  Sign,
  SignBox,
  SignLabel,
  TextField,
  ForgotBox,
  ForgotPasswordLabel,
  SignButton
} from './styles';

const Login = () => {
  return (
    <Sign>
      <SignBox>
        <SignLabel>Entre</SignLabel>
        <TextField placeholder="E-mail"></TextField>
        <TextField placeholder="Senha"></TextField>
        <ForgotBox>
          <ForgotPasswordLabel>Esqueceu sua senha? Recuperar senha</ForgotPasswordLabel>
        </ForgotBox>
        <SignButton to="/">Entrar</SignButton>
      </SignBox>
    </Sign>
  );
}

export default Login;