import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name={"Rakib"}>
        <Welcome />
      </Greet>
      <Greet name={"Faru"} />
    </div>
  );
}

export default App;
