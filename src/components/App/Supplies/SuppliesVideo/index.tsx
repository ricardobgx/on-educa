import React from 'react';
import { getYTVideoCode } from '../../../../functions/utils';
import { YTEmbedUrl } from '../../../../static/defaultValues';
import { SuppliesVideoPlayer } from './styles';

interface ISuppliesVideoProps {
  video: string;
}

const SuppliesVideo = (props: ISuppliesVideoProps): JSX.Element => {
  const { video } = props;

  return (
    <SuppliesVideoPlayer
      src={`${YTEmbedUrl}${getYTVideoCode(video)}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default SuppliesVideo;
