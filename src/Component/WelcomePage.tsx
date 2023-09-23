import {
  WelcomePhotoContainer,
  WelcomeTopObject,
  WelcomeBottomObject,
} from '../Component';

export const WelcomePage = ({
  onAnimationEnd,
}: {
  onAnimationEnd: () => void;
}) => {
  return (
    <div
      className='w-100'
      style={{
        backgroundImage: `url(${process.env.REACT_APP_ROOT_PATH}images/welcomeBackgroundImage.png)`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backgroundBlendMode: 'lighten',
        position: 'relative',
      }}
    >
      <WelcomeTopObject />
      <WelcomePhotoContainer onAnimationEnd={onAnimationEnd} />
      <WelcomeBottomObject />
    </div>
  );
};