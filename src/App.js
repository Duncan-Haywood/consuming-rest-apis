import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    const apiUrl = 'https://api.qary.me/bot/?format=api';
    axios({ method: 'get', url: `${apiUrl}` }).then(response => {
    
    this.setState({
      posts: 'ComponentsDidMount and posts are set and displayed' 
      // replace with: response.data
    })
    throw new Error('componentDidMount is involved and runs all the way through!');
  });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Does this work?
          </p>

          <p>
            Well, here are some Qary.API get calls, maybe?
          </p>
          {this.componentDidMount}
          <p>
            {this.posts}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
