import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';

function App() {
  return (
    <div className="App">
      <Greet name={"Rakib"}/>
      <Greet name={"Faru"}/>
    </div>
  );
}

export default App;
