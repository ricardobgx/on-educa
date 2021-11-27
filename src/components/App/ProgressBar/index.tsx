import React from 'react';
import { Container, Bar, ProgressLabel, InnerBar } from './styles';

interface IDuelProgressProps {
  now: number;
  max: number;
}

const ProgressBar = (props: IDuelProgressProps): JSX.Element => {
  const { now, max } = props;

  return (
    <Container>
      <Bar>
        <InnerBar
          style={{
            width: `${(now / max) * 100}%`,
          }}
        />
      </Bar>
      <ProgressLabel>
        {now}/{max}
      </ProgressLabel>
    </Container>
  );
};

export default ProgressBar;
