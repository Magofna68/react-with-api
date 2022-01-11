// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Headlines from './components/Headlines'

function App() {
  return (
    <React.Fragment>
      <Background>
    {/* The Headlines component will have the bulk of our code. 
    Because we will be using state, it will be a class component. */}
          <Headlines/>
      </Background>
    </React.Fragment>
  );
}

export default App;
