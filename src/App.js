import React from 'react';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import LogoAi from './assets/image/logo-ai.png';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="https://www.criptostable.com/">CRIPTOSTABLE.COM</a>
          </div>
          <div className="social">
            <a href="https://github.com/andresgmg/criptostable.com" title="GitHub" target="_blank" rel="noopener noreferrer">
              View the repo here <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <a href="https://www.criptostable.com" title="LogoAi" target="_blank" rel="noopener noreferrer">
            <img src={LogoAi} alt="Logo" width={100} height={100} />
          </a>
          <div className="title-holder">
            <h1>Get ready for the stable change.</h1>
            <h3>Also this domain is on sale for a nice crypto-project.</h3>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:andres.gmg1997@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://github.com/andresgmg" target="_blank" rel="noopener noreferrer">andresgmg</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | Powered by <a className="underlined" href="https://www.facelad.com/" title="GitHub repo" target="_blank" rel="noopener noreferrer">Facelad</a></span>
        </div>
      </div>
    );
  }
}

export default App;
