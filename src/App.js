import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Twit from 'twit';
import { Container, Row } from 'react-bootstrap';
import SearchSection from './components/SearchSection';
import SavedTweetsSection from './components/SavedTweetsSection';

const T = new Twit({
  consumer_key: 'tqLHbkFVE2kQYI29PrfDyCdrU',
  consumer_secret: 'Se0hpOUVoZ5V3szdwkUvYz6XkXH7O2dQvWvbyxTGGRB5lsdGJt',
  access_token: '1242913219964010497-B078NBKrLzoJEDJ2hANEhislZbMZEj',
  access_token_secret: 'aekmfHnIpz2az75CPMQKo1g83cs18zvf2yEb2lFjgduPZ',

})

console.log(T)


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
