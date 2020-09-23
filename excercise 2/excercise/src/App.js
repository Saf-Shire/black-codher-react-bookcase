import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const h1Style = { "fontSize":"30px","color":"#7e2b81",}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1> Welcome to our site </h1>
      </header>
    </div>
  );
}

export default App;
