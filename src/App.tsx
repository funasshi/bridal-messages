import { useState } from 'react';
import './App.css';
import { MessagePage, WelcomePage } from './Component';
import { Container } from 'react-bootstrap';
import { encrypt, decrypt } from './Util/cryption';

const App = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const encryptedGuestName = queryParams.get('name');
  const key = process.env.REACT_APP_CRYPT_KEY!;
  // console.log(encrypt(encryptedGuestName!, key));
  const guestName = encryptedGuestName
    ? decrypt(encryptedGuestName, key)
    : 'default';
  const [showWelcomeHideMessage, setShowWelcomeHideMessage] =
    useState<boolean>(true);
  const handleWelcomeAnimationEnd = () => {
    setShowWelcomeHideMessage(false); // WelcomePageを非表示
  };
  return (
    <Container style={{ maxWidth: '600px' }} className='p-0'>
      {showWelcomeHideMessage ? (
        <WelcomePage
          onAnimationEnd={handleWelcomeAnimationEnd}
          guestName={guestName}
        />
      ) : (
        <MessagePage guestName={guestName} />
      )}
    </Container>
  );
};

export default App;
