import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import FunctionClick from './component/FunctionClick';

function App() {
  return (
    <div className="App">
      <Greet fname={"Rakib"} lname={"khan"}>
        <Welcome />
      </Greet>
      <Greet fname={"Faru"} />
      <FunctionClick />
    </div>
  );
}

export default App;
