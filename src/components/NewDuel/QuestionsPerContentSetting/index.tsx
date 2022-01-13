import React from 'react';
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

  const generateQuestionsPerContentValues = (
    numParticipants: number,
  ): number[] => {
    const values: number[] = [];

    for (let i = 1; i <= 2; i += 1) {
      values.push(numParticipants * 2 * i);
    }

    return values;
  };

  const values = generateQuestionsPerContentValues(maxParticipants);

  return (
    <QuestionsPerContentSettingBox>
      <NewDuelSettingsLabel>{label}</NewDuelSettingsLabel>
      <QuestionsPerContentSettingSelect
        value={selectedValue}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedValue(Number(event.target.value))
        }
      >
        {values.map((value) => (
          <QuestionsPerContentSettingOption value={value}>
            {value} {valueLabel}
          </QuestionsPerContentSettingOption>
        ))}
      </QuestionsPerContentSettingSelect>
    </QuestionsPerContentSettingBox>
  );
};

export default QuestionsPerContentSetting;
