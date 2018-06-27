import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Search from './Search';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      openDisplay: 0,
      openSearch: 1,
      response: [],
      // Poster: 'https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
      // Title: 'The Avengers',
      // Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity"
    }
  }

  displayResults = e => {

    if(e.Title != null){
      this.setState({
        response: e,
        openDisplay: 1,
        openSearch: 0
      })
    }
    
    
    
  }

  // goSearch =() => {
  //   this.setState({
  //     openDisplay: 0,
  //       openSearch: 1
  //   })
  // }

  render() {
    return (
      <div className="App">
        {this.state.openDisplay && <Display Poster={this.state.response.Poster} Title= {this.state.response.Title} Plot={this.state.response.Plot}  />}  
        {this.state.openSearch && <Search displayRes = {j => this.displayResults(j)} />}
      </div>
    );
  }
}

export default App;
