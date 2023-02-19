import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import FunctionClick from './component/FunctionClick';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import Form from './component/Form';

function App() {

  const person = [
    {
      id: 1,
      name: 'test'
    },
    {
      id: 2,
      name: 'Rohan'
    }
  ]

  return (
    <div className="App">
      <Greet fname={"Rakib"} lname={"khan"}>
        <Welcome />
      </Greet>
      <Greet fname={"Faru"} />
      <FunctionClick />
      <UserGreeting isLoggedIn={false} userName={"Rakib"} />
      <NameList list={person} />
      <StyleSheet primary ='true'/>
      <Form/>
    </div>
  );
}

export default App;
