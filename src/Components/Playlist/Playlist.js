import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';




export class Playlist extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleNameChange = this.handleNameChange.bind(this);
    }
  
    handleNameChange(event) {
      this.props.onNameChange(event.target.value);
    }
  
    render() {
      return (
        <div className="Playlist">
          <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
          <TrackList tracks={this.props.playlistTracks}
                     isRemoval={true}
                     onRemove={this.props.onRemove} />
          <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
      );
    }
  }
  