import { useState } from 'react';
import './App.css';
import { MessagePage, WelcomePage } from './Component';
import { Container } from 'react-bootstrap';
import { encrypt, decrypt } from './Util/cryption';

const App = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const encryptedGuestName = queryParams.get('name');
  const key = process.env.REACT_APP_CRYPT_KEY!;

  // 暗号実験
  console.log(encryptedGuestName);
  console.log('暗号化', encrypt(encryptedGuestName!, key));
  const text = 'U2FsdGVkX182eGY0qILTHxpSrsJ5sQQUvICY+P2kiVE=';
  // const encrypted = decrypt(encryptedGuestName!, key);
  // console.log('enc', encrypted);
  console.log('dec', decrypt(text, key));

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
