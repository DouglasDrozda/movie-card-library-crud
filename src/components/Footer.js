import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="container-footer">
        <div className="container-logo">
          <div className="logo">
            <a href="https://www.linkedin.com/in/douglasdrozda/" target="_blank" rel="noopener noreferrer">
              <img src="images/linkedinlogo.jpg" alt="Linkedin logo" width="40px" />
            </a>
          </div>
          <div className="logo">
            <a href="https://github.com/DouglasDrozda" target="_blank" rel="noopener noreferrer">
              <img src="images/github_logo.png" alt="GitHub logo" width="40px" />
            </a>
          </div>
          <div className="logo">
            <a href="https://wa.me/5513997715719" target="_blank" rel="noopener noreferrer">
              <img src="images/whatsapp-logo-1.png" alt="whatsapp logo" width="40px" />
            </a>
          </div>
        </div>
        <p>©Douglas Drozda</p>
      </footer>
    );
  }
}

export default Footer;
