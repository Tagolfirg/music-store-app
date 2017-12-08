// import React class sekaligus comopnent property dari react library
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // define a state, init object buat wadah, untuk record user interaction jg
  // props (properties) adalah any type of data pass from parent to child component
  state = { albums: [] };

  // define a method
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
    // debugger; fungsinya seprti die() di PHP
    // setState fungsinya untuk update dan re-render ketika udah data
    // untuk mengisi state tidak pake this.state = ..
    // tapi menggunakan setState
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
      return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
  }
}

export default AlbumList;
