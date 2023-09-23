import './App.css';
import { MessagePage, WelcomePage } from './Component';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container style={{ maxWidth: '600px' }} className='p-0'>
      {/* <WelcomePage /> */}
      <MessagePage />
    </Container>
  );
};

export default App;
