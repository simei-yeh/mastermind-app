import React from 'react'
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/mainContainer/mainContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: [],
      previousGuesses: [],
      totalGuesses: 0,
    }
  }

  render () {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
