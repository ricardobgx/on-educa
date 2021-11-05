import React from 'react';
import theme from '../../../../global/styles/theme';
import FieldWarning, { IFieldWarningProps } from '../FieldWarning';
import { Container, InputBox, Input, InputLabel } from './components';

interface IInputProps {
  id: string;
  spellCheck: boolean;
  type: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

interface ISignFieldProps extends IInputProps, IFieldWarningProps {
  setIsActive: (isActive: boolean) => void;
}

const SignTextInput = (props: ISignFieldProps): JSX.Element => {
  const {
    id,
    spellCheck,
    type,
    value,
    setValue,
    placeholder,
    label,
    isActive,
    setIsActive,
  } = props;

  return (
    <Container>
      <InputBox>
        <Input
          id={id}
          spellCheck={spellCheck}
          type={type}
          value={value}
          style={{
            color: value ? theme.colors.textColor : '',
            paddingTop: !isActive ? '2rem' : '',
            borderColor: value ? theme.colors.textColor : '',
          }}
          onBlur={() => {
            if (!value && !isActive) setIsActive(!isActive);
          }}
          onFocus={() => {
            if (isActive) setIsActive(!isActive);
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
        />
        <InputLabel
          htmlFor={id}
          style={{
            fontSize: value ? '.8rem' : '',
            color: value ? theme.colors.textColor : '',
            top: value ? '15%' : '',
            transform: value ? 'translateY(0%)' : '',
          }}
        >
          {placeholder}
        </InputLabel>
      </InputBox>
      <FieldWarning label={label} isActive={isActive} />
    </Container>
  );
};

export default SignTextInput;
