import { useState } from 'react';
import './App.css';
import { MessagePage, WelcomePage } from './Component';
import { Container } from 'react-bootstrap';

const App = () => {
  const queryParams = new URLSearchParams(window.location.search);
  console.log(queryParams.get('name'));
  const guestName = queryParams.get('name') || 'YamadaYuka';
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
