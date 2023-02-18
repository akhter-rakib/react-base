import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Greet fname={"Rakib"} lname={"khan"}>
        <Welcome />
      </Greet>
      <Greet fname={"Faru"} />
    </div>
  );
}

export default App;
