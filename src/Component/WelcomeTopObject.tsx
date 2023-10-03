import { BounceFadeinSentence } from './BounceFadeinSentence';

export const WelcomeTopObject = () => {
  return (
    <div
      style={{
        height: '40%',
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          clipPath: 'polygon(0% 0%, 30% 0%, 60% 60%, 50% 80%, 0% 100%)',
        }}
        className='w-100 h-100'
      ></div>
      <p
        style={{
          fontFamily: 'Parisienne',
          fontSize: '50px',
          position: 'relative',
          bottom: '150px',
          left: '30px',
          transform: 'rotate(-10deg)',
          display: 'inline-block',
          width: '50%',
          animation: 'fadeOut 1.5s 1 3.6s forwards',
        }}
      >
        <BounceFadeinSentence sentence='For you!' />
      </p>
    </div>
  );
};
