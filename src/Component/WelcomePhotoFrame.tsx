import { WelcomePhotoContainer } from './WelcomePhotoContainer';
import { WelcomeTopObject } from './WelcomeTopObject';
import { WelcomeBottomObject } from './WelcomeBottomObject';

export const WelcomePhotoFrame = () => {
  return (
    <div
      className='w-100'
      style={{
        backgroundImage: `url(bridal-messages/images/welcomeBackgroundImage.png)`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundBlendMode: 'lighten',
        position: 'relative',
      }}
    >
      <WelcomeTopObject />
      <WelcomePhotoContainer />
      <WelcomeBottomObject />
    </div>
  );
};
