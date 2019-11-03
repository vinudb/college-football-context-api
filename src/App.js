import React from 'react';
import 'normalize.css';
import './App.scss';
import CollegeFootballApp from './components/CollegeFootballApp';

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <div className="title">COLLEGE FOOTBALL</div>
        <CollegeFootballApp />
      </div>
    </div>
  );
}

export default App;
