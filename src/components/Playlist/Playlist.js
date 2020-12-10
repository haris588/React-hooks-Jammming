import React from "react";
import TrackList from '../TrackList/TrackList'
import "./Playlist.css";

function Playlist({ playlistTracks, onRemove, playlistNameChange, playlistName, onSave}) {

  const handleOnChange = (event) => {
    playlistNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input onChange={handleOnChange} value={playlistName} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button onClick={onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
