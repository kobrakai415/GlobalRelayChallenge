import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import SearchSection from './components/SearchSection';
import SavedTweetsSection from './components/SavedTweetsSection';

function App() {
  return (
    <div className="App">
      <Container >
        <h1>Global Relay Tweet Saver</h1>

        <Row>
          <SearchSection />
          <SavedTweetsSection />
        </Row>
      </Container>
    </div>
  );
}

export default App;
