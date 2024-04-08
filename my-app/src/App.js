import logo from './logo.svg';
import './App.css';
import charac from './assets/img/charac.png';
import { Login } from "./Login";
import { Register } from "./Register";
import {useState} from 'react';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={charac} style={{width:'90px'}} alt="phoo" />
        <p>
          E-comerce Camp
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
         

      </header>
  
        
    </div>
  );
}

export default App;
