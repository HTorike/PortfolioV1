import React, {useState, useEffect} from 'react';
import './App.css';
import ToggleSwitch from './components/ToggleSwitch';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundSec1 from './components/backgroundSec1';
import SkillsSec1 from './components/SkillsSec1';
import MouseGlow from './components/mouseGlow';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <>
      <header className="header">
        <div className="headerContent">
          <ToggleSwitch isToggled={isDarkMode} onToggle={handleThemeToggle} />
        </div>
      </header>
      
      <MouseGlow isDarkMode={isDarkMode} />

        <section className='introSection'>
          <div className="intro">
            <h1 className="name">Hello, I'm A. Patrick</h1>
            <p className="description" style={{ fontSize: '40px' }}>
              A Brazilian seeking to become a great front-end software engineer.
            </p>
            <p style={{ fontSize: '30px' }}>
              How about a chat?{' '}
              <a
                href="mailto:patrick231102@gmail.com?subject=Contact Subject&body=Hello, could we have a conversation?"
                className="btnEmail"
                style={{ fontSize: '30px' }}
              >
                patrick231102@gmail.com
              </a>
            </p>
          </div>
        </section>

    <BackgroundSec1 />

    <SkillsSec1 />

    </>
  );
}

export default App;