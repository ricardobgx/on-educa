import React from 'react';
import { RequiredField } from '../../../pages/NewContent/styles';
import {
  NewContentVideoBox,
  VideoLabel,
  VideoInput,
  NewContentVideoPreview,
} from './styles';

interface INewContentVideoProps {
  video: string;
  setVideo: (video: string) => void;
}

const NewContentVideo = (props: INewContentVideoProps): JSX.Element => {
  /* Props */

  const { video, setVideo } = props;

  const videoLinkSplitWatch = video.split('watch?v=');

  return (
    <NewContentVideoBox>
      <VideoLabel>
        Link do vídeo<RequiredField>*</RequiredField>
      </VideoLabel>
      <VideoInput
        value={video}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setVideo(event.target.value);
        }}
        type="text"
        spellCheck={false}
      />
      <NewContentVideoPreview
        src={`https://www.youtube.com/embed/${videoLinkSplitWatch[1]}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </NewContentVideoBox>
  );
};

export default NewContentVideo;
