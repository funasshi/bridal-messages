import { useEffect, useState } from 'react';
import {
  DateCircle,
  MessagePhoto,
  Message,
  BounceFadeinSentence,
} from '../Component';
import { preloadImages } from '../Util/preload';

export const MessagePage = ({ guestName }: { guestName: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageUrl = `${process.env.REACT_APP_ROOT_PATH}images/messageBackgroundImage.png`;
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
            ? `${process.env.REACT_APP_ROOT_PATH}images/messageBackgroundImage.png`
            : ''
        })`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(253,238,239,0.75)',
        }}
      >
        <div
          style={{
            padding: '0 20px',
            width: '100%',
            color: '#807169',
          }}
        >
          <DateCircle />
          <p
            style={{
              fontSize: '40px',
              textAlign: 'center',
              fontFamily: 'Parisienne',
              animation: `bounceFadeIn 0.4s forwards 0s`,
            }}
          >
            <BounceFadeinSentence sentence={'Thank you'} />
          </p>
          <Message guestName={guestName} />
          {/* <MessagePhoto /> */}
        </div>
      </div>
    </div>
  );
};
