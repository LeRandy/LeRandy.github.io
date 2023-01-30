import './App.scss';
import DarkModeToggle from './components/DarkModeToggle';
import { useState } from 'react';
import Intro from './components/Intro/Intro';
import MainContent from './components/main_content/MainContent';

export function App() {
  let [ darkMode, setDarkMode ] = useState( false );

  function handleDarkModeClick() {
    setDarkMode( !darkMode );
  }

  return (
    <div className={[`app`, darkMode ? `dark-mode` : `` ].join( ` ` )}>
      <header className="App-header">
        <Intro/>
      </header>
      <MainContent/>
      <DarkModeToggle darkMode={ darkMode } handleDarkModeClick={ handleDarkModeClick }/>
    </div>
  );
}



export default App;