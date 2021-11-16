import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import SearchSection from './components/SearchSection';
import SavedTweetsSection from './components/SavedTweetsSection';
import Navbar from './components/Navbar';

function App() {

  const [draggedTweet, setDraggedTweet] = useState(null)

  return (
    <div className="App">
      <Navbar />
      <Container >

        <Row style={{ minHeight: "100vh" }} >
          <SearchSection setDraggedTweet={setDraggedTweet} />
          <SavedTweetsSection draggedTweet={draggedTweet} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
