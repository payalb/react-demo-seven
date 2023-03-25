import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Counter from "./components/counter"
import {Test} from "./components/test"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Counter></Counter>
        <Test name= "payal" subjects={["java", "sql"]} />
      </header>
    </div>
  );
}

export default App;
