import { Container, Image } from 'react-bootstrap';

export const WelcomePhotoContainer = () => {
  return (
    <Container
      style={{
        zIndex: 0,
        display: 'grid',
        placeItems: 'center',
      }}
      className='w-100 h-100'
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <div
          style={{
            width: '320px',
            height: '320px',
            display: 'inline-block',
            clipPath:
              'polygon(10% 0%, 90% 0%, 100% 20%, 95% 95%, 0% 100%, 0% 50%)',
            animation: 'moveFade 5s linear forwards',
          }}
        >
          <Image
            src='bridal-messages/images/yuka.jpg'
            className='w-100 h-100'
            // TODO: coverで比率は保つが、一瞬縮むので、元画像を正方形にする
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </Container>
  );
};
