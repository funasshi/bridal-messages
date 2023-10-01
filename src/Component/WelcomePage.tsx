import { useEffect, useState } from 'react';
import {
  WelcomePhotoContainer,
  WelcomeTopObject,
  WelcomeBottomObject,
} from '../Component';
import { preloadImages } from '../Util/preload';

export const WelcomePage = ({
  onAnimationEnd,
  guestName,
}: {
  onAnimationEnd: () => void;
  guestName: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageUrl = `url(${process.env.REACT_APP_ROOT_PATH}images/welcomeBackgroundImage.jpg)`;
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
      className='w-100'
      style={{
        backgroundImage: `url(${
          imageLoaded
            ? `${process.env.REACT_APP_ROOT_PATH}images/welcomeBackgroundImage.jpg`
            : ''
        })`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundBlendMode: 'lighten',
        position: 'relative',
      }}
    >
      <WelcomeTopObject />
      <WelcomePhotoContainer
        onAnimationEnd={onAnimationEnd}
        guestName={guestName}
      />
      <WelcomeBottomObject />
    </div>
  );
};
