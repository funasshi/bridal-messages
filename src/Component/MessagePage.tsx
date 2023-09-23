import {
  DateCircle,
  MessagePhoto,
  Message,
  BounceFadeinSentence,
} from '../Component';

export const MessagePage = () => {
  return (
    <div
      className='w-100'
      style={{
        backgroundColor: '#f2ecec',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          height: '667px',
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
        <Message />
        <MessagePhoto />
      </div>
    </div>
  );
};
