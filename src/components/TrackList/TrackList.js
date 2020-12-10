import React from "react";
import Track from '../Track/Track'
import "./TrackList.css";

function TrackList({ tracks, onAdd, onRemove, isRemoval}) {
  return (
    <div className="TrackList">
      {tracks.map(track => {
        return <Track track={track} key={track.id} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />
      })}
    </div>
  );
}

export default TrackList;
