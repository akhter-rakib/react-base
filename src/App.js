import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import FunctionClick from './component/FunctionClick';
import UserGreeting from './component/UserGreeting';

function App() {
  return (
    <div className="App">
      <Greet fname={"Rakib"} lname={"khan"}>
        <Welcome />
      </Greet>
      <Greet fname={"Faru"} />
      <FunctionClick />
      <UserGreeting isLoggedIn={false} userName={"Rakib"} />
    </div>
  );
}

export default App;
