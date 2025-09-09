import React, {useState, useEffect} from 'react';
import './App.css';
import ToggleSwitch from './components/ToggleSwitch';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundSec1 from './components/backgroundSec1';
import SkillsSec1 from './components/SkillsSec1';
import MouseGlow from './components/mouseGlow';
import DeployLink from './components/DeployLink';
import AluraPlus from './components/AluraPlus.jsx';
import Resume from './components/Resume.jsx';
import PortfolioV1 from './components/PortfolioV1.jsx'

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

      <section className='ProjectsSec1'>
        <div className='ProjectsContainer'>
          <div className='ProjectsTitle'>
          <h2 data-aos="fade-up">Projects</h2>
          </div>
          <ul>
            <PortfolioV1 />
            <hr data-aos="fade-up" style={{ border: 'none', borderTop: '1px solid #5a189a', margin: '1em 0' }} />
            <Resume />
            <hr data-aos="fade-up" style={{ border: 'none', borderTop: '1px solid #5a189a', margin: '1em 0' }} />
            <AluraPlus />
          </ul>
        </div>
      </section>

      <footer className='footer'>

        <div className='footerText'>
          <p>Design & Developed by A. Patrick | 2025</p>
        </div>
        <div className='footerLinks'>
          <a href="#" style={{
            fontSize: '35px',
            textDecoration: 'none',
            marginRight: '0.5em',
          }}>☝️</a>
          <a href="mailto:patrick231102@gmail.com?subject=Contact Subject&body=Hello, could we have a conversation?">Email</a>
          <a href="https://github.com/HTorike">Github</a>
          <a href="https://www.linkedin.com/in/patrick-andré-51098729b">LinkedIn</a>
        </div>

      </footer>

    </>
  );
}

export default App;