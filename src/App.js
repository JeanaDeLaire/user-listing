import React from 'react';
// import logo from './logo.png';
import RandomUsers from './RandomUsers.js'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faUsers } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Random User Generator
        <FontAwesomeIcon icon={faUsers} className="App-icon">/</FontAwesomeIcon>
      </header>
      <RandomUsers />
    </div>
  );
}

export default App;
