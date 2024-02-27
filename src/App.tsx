import './App.scss';
import DarkModeToggle from './components/DarkModeToggle';
import { useState } from 'react';
import Intro from './components/Intro/Intro';
import MainContent from './components/main_content/MainContent';
import NotificationHub from './components/NotificationHub';

export function App() {
  let [ darkMode, setDarkMode ] = useState( false );
  let [ background ] = useState( backgroundImage() );

  function handleDarkModeClick() {
    setDarkMode( !darkMode );
  }

  return (
    <div className={[`app`, darkMode ? `dark-mode` : `` ].join( ` ` )}>
      <header className="App-header">
        <Intro background={ background }/>
      </header>
      <MainContent/>
      <DarkModeToggle darkMode={ darkMode } handleDarkModeClick={ handleDarkModeClick }/>
      <NotificationHub/>
    </div>
  );
}

function backgroundImage() {
  const backgroundImages = [
      "url(https://drg2mhzb9zcts.cloudfront.net/themes/wallpapers/tomorrow_2_ultrawide.jpg)",
      "url(https://drg2mhzb9zcts.cloudfront.net/themes/wallpapers/tomorrow_3_ultrawide.jpg)",
      "url(https://drg2mhzb9zcts.cloudfront.net/themes/wallpapers/tomorrow_4_ultrawide.jpg)",
      "url(https://drg2mhzb9zcts.cloudfront.net/themes/wallpapers/tomorrow_5_ultrawide.jpg)"
      ];
  
  return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
}

export default App;