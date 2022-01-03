import React from 'react';
import {
  RequiredField,
  NewContentBoxLabel,
} from '../../../pages/NewContent/styles';
import {
  NewContentVideoBox,
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

  const getVideoCode = (url: string): string => {
    const urlParts = url.split('?');

    if (urlParts[1]) {
      const query = urlParts[1];
      const queryParams = query.split('&');

      if (queryParams[0]) {
        const vParam = queryParams[0];
        const vParamValue = vParam.split('=')[1];

        if (vParamValue) return vParamValue;
      }
    }

    return '';
  };

  return (
    <NewContentVideoBox>
      <NewContentBoxLabel>
        Link do vídeo<RequiredField>*</RequiredField>
      </NewContentBoxLabel>
      <VideoInput
        value={video}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setVideo(event.target.value);
        }}
        type="text"
        spellCheck={false}
      />
      <NewContentVideoPreview
        src={`https://www.youtube.com/embed/${getVideoCode(video)}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </NewContentVideoBox>
  );
};

export default NewContentVideo;
