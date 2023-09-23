import { Image } from 'react-bootstrap';

export const MessagePhoto = () => {
  return (
    <div
      style={{
        height: '250px',
        textAlign: 'right',
      }}
    >
      {' '}
      <Image
        src={`${process.env.REACT_APP_ROOT_PATH}images/weddingCake.jpg`}
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
