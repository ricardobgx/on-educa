import React from 'react';
import { Container, WarningLabel } from './components';

export interface IFieldWarningProps {
  isActive: boolean;
  label: string;
}

const FieldWarning = (props: IFieldWarningProps): JSX.Element => {
  const { isActive, label } = props;
  return (
    <Container
      style={{
        height: isActive ? '1.2rem' : '0rem',
        animation: isActive ? '' : 'none',
      }}
    >
      <WarningLabel>*{label}</WarningLabel>
    </Container>
  );
};

export default FieldWarning;
