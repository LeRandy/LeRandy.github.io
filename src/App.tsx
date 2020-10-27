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
        <MainContent/>
    </div>
  );
}

export default App;