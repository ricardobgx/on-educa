import React from 'react';
import { NewDuelSettingsLabel } from '../NewDuelSettings/styles';
import {
  NewDuelSettingBox,
  NewDuelSettingOption,
  NewDuelSettingSelect,
} from './styles';

interface INewDuelSettingProps {
  label: string;
  values: number[];
  selectedValue: number;
  valueLabel: string;
  setSelectedValue: (value: number) => void;
}

const NewDuelSetting = (props: INewDuelSettingProps): JSX.Element => {
  const { label, values, selectedValue, valueLabel, setSelectedValue } = props;

  return (
    <NewDuelSettingBox>
      <NewDuelSettingsLabel>{label}</NewDuelSettingsLabel>
      <NewDuelSettingSelect
        className="shadow-select"
        value={selectedValue}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedValue(Number(event.target.value))
        }
      >
        {values.map((value) => (
          <NewDuelSettingOption value={value}>
            {value} {valueLabel}
          </NewDuelSettingOption>
        ))}
      </NewDuelSettingSelect>
    </NewDuelSettingBox>
  );
};

export default NewDuelSetting;
