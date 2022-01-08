import React from 'react';
import SuppliesVideo from '../../App/Supplies/SuppliesVideo';
import { ContentVideoBox } from './styles';

interface IContentVideoProps {
  video: string;
}

const ContentVideo = (props: IContentVideoProps): JSX.Element => {
  /* Props */

  const { video } = props;

  return (
    <ContentVideoBox>
      <SuppliesVideo video={video} />
    </ContentVideoBox>
  );
};

export default ContentVideo;
