import React from 'react';
import {
  ProgressBarBox,
  ProgressBarWrapperBar,
  ProgressBarInnerBar,
  ProgressBarLabel,
} from '../styles';

const BigProgressBar = (props: IProgressBarProps): JSX.Element => {
  const { now, max, label } = props;

  return (
    <ProgressBarBox className="big-bar">
      <ProgressBarWrapperBar>
        <ProgressBarInnerBar
          style={{
            width: `${(now / max) * 100}%`,
          }}
        />
      </ProgressBarWrapperBar>
      <ProgressBarLabel>{label}</ProgressBarLabel>
    </ProgressBarBox>
  );
};

export default BigProgressBar;
