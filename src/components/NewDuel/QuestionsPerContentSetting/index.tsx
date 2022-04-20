import React, { useEffect, useState } from 'react';
import { NewDuelSettingsLabel } from '../NewDuelSettings/styles';
import {
  QuestionsPerContentSettingBox,
  QuestionsPerContentSettingOption,
  QuestionsPerContentSettingSelect,
} from './styles';

interface IQuestionsPerContentSettingProps {
  label: string;
  selectedValue: number;
  valueLabel: string;
  setSelectedValue: (value: number) => void;
  maxParticipants: number;
}

const QuestionsPerContentSetting = (
  props: IQuestionsPerContentSettingProps,
): JSX.Element => {
  const {
    label,
    selectedValue,
    valueLabel,
    setSelectedValue,
    maxParticipants,
  } = props;

  const [questionsPerContentValues, setQuestionsPerContentValues] = useState<
    number[]
  >([]);

  const generateQuestionsPerContentValues = (
    numParticipants: number,
  ): number[] => {
    const values: number[] = [];

    for (let i = 1; i <= 2; i += 1) {
      values.push(numParticipants * 2 * i);
    }

    return values;
  };

  useEffect(() => {
    const newQuestionsPerContentValues =
      generateQuestionsPerContentValues(maxParticipants);

    setQuestionsPerContentValues(newQuestionsPerContentValues);
    setSelectedValue(newQuestionsPerContentValues[0]);
  }, [maxParticipants]);

  return (
    <QuestionsPerContentSettingBox>
      <NewDuelSettingsLabel>{label}</NewDuelSettingsLabel>
      <QuestionsPerContentSettingSelect
        value={selectedValue}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedValue(Number(event.target.value))
        }
      >
        {questionsPerContentValues.map((value) => (
          <QuestionsPerContentSettingOption value={value}>
            {value} {valueLabel}
          </QuestionsPerContentSettingOption>
        ))}
      </QuestionsPerContentSettingSelect>
    </QuestionsPerContentSettingBox>
  );
};

export default QuestionsPerContentSetting;
