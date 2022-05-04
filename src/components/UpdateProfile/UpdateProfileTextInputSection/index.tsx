import React from 'react';
import {
  UpdateProfileInputText,
  UpdateProfileSectionBox,
  UpdateProfileSectionBoxLabel,
} from '../styles';

interface IUpdateProfileTextInputSectionProps {
  label: string;
  inputType: string;
  value: string;
  setValue: (text: string) => void;
}

const UpdateProfileTextInputSection = (
  props: IUpdateProfileTextInputSectionProps,
): JSX.Element => {
  const { label, inputType, value, setValue } = props;

  return (
    <UpdateProfileSectionBox>
      <UpdateProfileSectionBoxLabel>{label}</UpdateProfileSectionBoxLabel>
      <UpdateProfileInputText
        className="bd-rd-20"
        type={inputType}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
    </UpdateProfileSectionBox>
  );
};

export default UpdateProfileTextInputSection;
