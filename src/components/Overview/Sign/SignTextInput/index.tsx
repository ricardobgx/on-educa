import React, { useState } from 'react';
import theme from '../../../../global/styles/theme';
import {
  Container,
  InputBox,
  Input,
  InputLabel,
  FieldIcon,
} from './components';

interface IInputProps {
  id: string;
  spellCheck: boolean;
  type: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

interface ISignFieldProps extends IInputProps {
  icon: string;
}

const SignTextInput = (props: ISignFieldProps): JSX.Element => {
  const { id, spellCheck, type, value, setValue, placeholder, icon } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <InputBox
        style={{
          borderColor: value || isFocused ? theme.colors.textColor : '',
        }}
      >
        <FieldIcon
          className={icon}
          style={{
            color: value || isFocused ? theme.colors.textColor : '',
          }}
        />
        <Input
          id={id}
          spellCheck={spellCheck}
          type={type}
          value={value}
          style={{
            color: value || isFocused ? theme.colors.questionTextColor : '',
          }}
          onBlur={() => {
            if (isFocused) setIsFocused(!isFocused);
          }}
          onFocus={() => {
            if (!isFocused) setIsFocused(!isFocused);
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
        />
        <InputLabel
          htmlFor={id}
          style={{
            fontSize: value || isFocused ? '14px' : '',
            top: value || isFocused ? '15%' : '',
            transform: value || isFocused ? 'translateY(0%)' : '',
          }}
        >
          {placeholder}
        </InputLabel>
      </InputBox>
    </Container>
  );
};

export default SignTextInput;
