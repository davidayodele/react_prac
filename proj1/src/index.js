import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import logo from './logo.svg';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function Header() {
  return (
      <header>
          <nav>
              <img alt="REACT Logo" src={logo} width="100px" />
              <ul className="nav-items">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function Footer() {
  return (
      <footer>
          <small>2023 David Ayodele</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}

function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))