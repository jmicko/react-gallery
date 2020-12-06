import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {

  state = {
    gallery: [],
  }

  componentDidMount() {
    console.log('component did mount');
    this.getAllPictures();
  }

  getAllPictures = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log('Response: ', response.data);
        this.setState({
          gallery: response.data
        })
      })
      .catch((error) => {
        alert('Something bad happened');
        console.log('error', error);
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList
          gallery={this.state.gallery}
          getAllPictures={this.getAllPictures}
          // like={this.like}
        />
        <p>Gallery goes here</p>
      </div>
    );
  }
}

export default App;
