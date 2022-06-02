import React from 'react';
import { RequiredFieldLabel } from '../../Subjects/styles';
import {
  NewInterativeRoomSettingBox,
  NewInterativeRoomSettingLabel,
  NewInterativeRoomSettingOptions,
  NewInterativeRoomSettingOption,
  NewInterativeRoomSettingOptionLabel,
} from './styles';

const NewInterativeRoomSetting: React.FC<INewInterativeRoomSettingProps> = (
  props,
) => {
  const { label, options, optionsLabel } = props;

  return (
    <NewInterativeRoomSettingBox className="with-shadow bd-rd-20">
      <NewInterativeRoomSettingLabel>
        {label}
        <RequiredFieldLabel>*</RequiredFieldLabel>
      </NewInterativeRoomSettingLabel>
      <NewInterativeRoomSettingOptions>
        {options.map((option) => (
          <NewInterativeRoomSettingOption
            key={option}
            className="block-shadow-button secondary-action bd-rd-15"
          >
            <NewInterativeRoomSettingOptionLabel>
              {option} {optionsLabel}
            </NewInterativeRoomSettingOptionLabel>
          </NewInterativeRoomSettingOption>
        ))}
      </NewInterativeRoomSettingOptions>
    </NewInterativeRoomSettingBox>
  );
};

export default NewInterativeRoomSetting;
