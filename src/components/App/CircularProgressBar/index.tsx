import React, { useEffect, useState } from 'react';
import theme from '../../../global/styles/theme';
import {
  CircularProgressBarBox,
  Circular,
  CircularInner,
  CircularOuter,
  CircularNumber,
  Circle,
  Dot,
  Span,
  Bar,
  BarProgress,
} from './styles';

interface ICircularProgressBarProps {
  time: number;
  stop: boolean;
}

const CircularProgressBar = (props: ICircularProgressBarProps): JSX.Element => {
  const { time, stop } = props;

  const [progressNumber, setProgressNumber] = useState(time);
  const [counterInterval, setCounterInterval] = useState<any>();

  const updateProgressNumber = (): void => {
    let counter = time;
    setCounterInterval(
      setInterval(() => {
        if (counter === 0) {
          clearInterval(counterInterval);
        } else {
          counter -= 1;
          setProgressNumber(counter);
        }
      }, 1000),
    );
  };

  useEffect(() => {
    if (stop) {
      clearInterval(counterInterval);
    } else {
      updateProgressNumber();
    }
  }, [stop, time]);

  return (
    <CircularProgressBarBox className="circular-bar">
      <Circular
        color={
          progressNumber > 10
            ? theme.colors.textColor
            : theme.similarColors.warningColor
        }
      >
        <CircularInner className="inner" />
        <CircularOuter className="outer" />
        <CircularNumber className="numb">{progressNumber}s</CircularNumber>
        <Circle
          className="circle"
          color={
            progressNumber > 10
              ? theme.colors.textColor
              : theme.similarColors.warningColor
          }
        >
          <Dot
            style={{
              animationDuration: `${time}s`,
            }}
            className="dot"
          >
            <Span />
          </Dot>
          <Bar className="bar left">
            <BarProgress
              style={{
                animationDuration: `${time / 2}s`,
              }}
              className="progress"
            />
          </Bar>
          <Bar className="bar right">
            <BarProgress
              style={{
                animationDuration: `${time / 2}s`,
                animationDelay: `${time / 2}s`,
              }}
              className="progress"
            />
          </Bar>
        </Circle>
      </Circular>
    </CircularProgressBarBox>
  );
};

export default CircularProgressBar;
