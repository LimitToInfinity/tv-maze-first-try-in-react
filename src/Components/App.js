import React, { Component } from 'react';
import './../Stylesheets/App.css';

import ShowCard from "./ShowCard"

class App extends Component {
  state = {
    shows: [],
  }
  
  tvMazeURL = `https://api.tvmaze.com/shows?page=0`;

  getShowData = () => {
    return fetch(this.tvMazeURL)
      .then(response => response.json())
      .then(shows => this.setState({ shows }) );
  }

  displayShows = () => {
    const { shows } = this.state;
    
    return shows.map((show, index) => {
      
      return <ShowCard
        key={index}
        name={show.name}
        image={show.image.medium}
      />
    
    });
  }

  componentDidMount() {
    this.getShowData()
  }
  
  render() {

    return (
      <div className="App">
        {this.displayShows()}
      </div>
    );
  }
}

export default App;
