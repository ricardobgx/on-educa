import React, { useState } from 'react';
import { createImage } from '../../../functions/image';
import { updatePeople } from '../../../functions/people';
import OnEducaAPI from '../../../services/api';
import { SmallMaterialIconRound } from '../../App/Icons/MaterialIcons/MaterialIconsRound';
import {
  UpdateProfilePictureBox,
  ProfilePicture,
  ProfilePictureImg,
  SelectImageButton,
  UpdateProfilePictureActions,
  CancelUpdatePictureButton,
  CancelUpdatePictureButtonLabel,
  UpdatePictureButton,
  UpdatePictureButtonLabel,
  SelectImageInput,
  SelectImageButtonLabel,
  UpdateProfilePictureShadow,
} from './styles';

interface IUpdateProfilePictureProps {
  peopleId: string;
  token: string;
  profilePicture: string;
  setIsUpdatingProfilePicture: (value: boolean) => void;
}

const UpdateProfilePicture = (
  props: IUpdateProfilePictureProps,
): JSX.Element => {
  const { peopleId, token, profilePicture, setIsUpdatingProfilePicture } =
    props;

  const [file, setFile] = useState<any>();
  const [newProfilePicture, setNewProfilePicture] = useState(profilePicture);

  const imageHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setNewProfilePicture(reader.result as string);
      }
    };
    if (event.target.files) {
      reader.readAsDataURL(event.target.files[0]);
      setFile(event.target.files[0]);
    }
  };

  const updateProfilePicture = (imageUploaded: IImage): void => {
    updatePeople(
      OnEducaAPI,
      peopleId,
      { profilePictureId: imageUploaded.id },
      token,
      () => {
        window.location.reload();
      },
      () => console.log('erro'),
    );
  };

  const uploadImage = async (): Promise<void> => {
    const imageParams = new FormData();
    imageParams.append('image', file);
    await createImage(OnEducaAPI, imageParams, updateProfilePicture, token);
    // await fetch(`${process.env.REACT_APP_API_URL}/images`, {
    //   method: 'POST',
    //   body: imageParams,
    // });
  };

  return (
    <UpdateProfilePictureShadow>
      <UpdateProfilePictureBox>
        <ProfilePicture>
          <ProfilePictureImg src={newProfilePicture} />
        </ProfilePicture>
        <SelectImageInput
          id="image-input"
          type="file"
          name="image-upload"
          accept="image/*"
          onChange={imageHandler}
        />
        <SelectImageButton htmlFor="image-input">
          <SelectImageButtonLabel>Selecionar</SelectImageButtonLabel>
          <SmallMaterialIconRound color="" icon="add_photo_alternate" />
        </SelectImageButton>
        <UpdateProfilePictureActions>
          <CancelUpdatePictureButton
            onClick={() => setIsUpdatingProfilePicture(false)}
          >
            <CancelUpdatePictureButtonLabel>
              Cancelar
            </CancelUpdatePictureButtonLabel>
          </CancelUpdatePictureButton>
          <UpdatePictureButton onClick={() => uploadImage()}>
            <UpdatePictureButtonLabel>Atualizar</UpdatePictureButtonLabel>
          </UpdatePictureButton>
        </UpdateProfilePictureActions>
      </UpdateProfilePictureBox>
    </UpdateProfilePictureShadow>
  );
};

export default UpdateProfilePicture;
