import './App.css';
import { WelcomePhotoFrame } from './Component';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container style={{ maxWidth: '600px' }} className='p-0'>
      <WelcomePhotoFrame />
    </Container>
  );
};

export default App;
