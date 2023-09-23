import { useState } from 'react';
import './App.css';
import { MessagePage, WelcomePage } from './Component';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const guestName = queryParams.get('name') || 'guest';

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
