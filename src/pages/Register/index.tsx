import {
  Sign,
  SignBox,
  SignLabel,
  TextField,
  SignButton
} from './styles';

const Register = () => {
  return (
    <Sign>
      <SignBox>
        <SignLabel>Registre-se</SignLabel>
        <TextField placeholder="E-mail"></TextField>
        <TextField placeholder="Senha"></TextField>
        <SignButton to="/">Registrar</SignButton>
      </SignBox>
    </Sign>
  );
}

export default Register;