import React from 'react';
import { ProgressBarBox, ProgressBarInnerBar } from '../styles';

const BigProgressBar = (props: IProgressBarProps): JSX.Element => {
  const { now, max } = props;

  return (
    <ProgressBarBox className="big-bar">
      <ProgressBarInnerBar
        style={{
          width: `${(now / max) * 100}%`,
        }}
      />
    </ProgressBarBox>
  );
};

export default BigProgressBar;
