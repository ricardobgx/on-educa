import React from 'react';
import { getYTVideoCode } from '../../../functions/utils';
import { RequiredField } from '../../../global/styles/components/textComponents';
import { NewContentBoxLabel } from '../../../pages/NewContent/styles';
import { YTWatchUrl } from '../../../static/defaultValues';
import SuppliesVideo from '../../App/Supplies/SuppliesVideo';
import {
  NewContentVideoBox,
  NewContentVideoInput,
  NewContentVideoPreview,
} from './styles';

interface INewContentVideoProps {
  video: string;
  setVideo: (video: string) => void;
}

const NewContentVideo = (props: INewContentVideoProps): JSX.Element => {
  /* Props */

  const { video, setVideo } = props;

  return (
    <NewContentVideoBox>
      <NewContentBoxLabel>
        Link do vídeo<RequiredField>*</RequiredField>
      </NewContentBoxLabel>

      <NewContentVideoInput
        value={video}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setVideo(`${YTWatchUrl}${getYTVideoCode(event.target.value)}`)
        }
        type="text"
        spellCheck={false}
      />

      <NewContentVideoPreview>
        <SuppliesVideo video={video} />
      </NewContentVideoPreview>
    </NewContentVideoBox>
  );
};

export default NewContentVideo;
