import React, {useEffect} from 'react';
import './App.css';
import ToggleSwitch from './components/ToggleSwitch';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
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
          <ToggleSwitch style={{ width: '20px' }} />
        </div>
      </header>
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

        <backgroundSec1 />

    </>
  );
}

export default App;