import React from 'react';
import './App.css';

import Intro from './components/intro/Intro';
import MainContent from './components/main_content/MainContent';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
      </header>
      <div className={ `main-content` }>
        <MainContent/>
      </div>
    </div>
  );
}

export default App;
