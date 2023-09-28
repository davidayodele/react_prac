import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';
import Header from './Header';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to hang with the cool kids!</li>
              <li>I'm more likely to learn other JS frameworks if I know React.</li>
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