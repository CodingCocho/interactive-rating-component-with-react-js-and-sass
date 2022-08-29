import './App.css';
import {RatingComponent} from './components/RatingComponent'

function App() {

  document.body.classList.add('body-styling')

  return (
    <div 
    className="App"
    >
      <RatingComponent />
    </div>
  );
}

export default App;
