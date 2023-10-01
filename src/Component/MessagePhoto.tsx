import { Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { preloadImages } from '../Util/preload';

export const MessagePhoto = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageUrl = `${process.env.REACT_APP_ROOT_PATH}images/weddingCake.jpg`;
    preloadImages([imageUrl])
      .then(() => {
        setImageLoaded(true);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div
      style={{
        height: '250px',
        textAlign: 'right',
      }}
    >
      <Image
        src={
          imageLoaded
            ? `${process.env.REACT_APP_ROOT_PATH}images/weddingCake.jpg`
            : ''
        }
        style={{
          objectFit: 'cover',
          width: '180px',
          height: '250px',
          overflow: 'hidden',
          borderRadius: '90px 90px 0 0',
        }}
      />
    </div>
  );
};
