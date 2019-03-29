import React, { Component } from 'react';
import SongList from './SongList';

export default class App extends Component {
  render() {
    return (
      <div className="ui container" style={{marginTop: '20px'}}>
        <SongList />
      </div>
    )
  }
}
