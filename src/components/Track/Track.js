import React from "react";
import "./Track.css";

function Track({ track, onAdd, isRemoval, onRemove }) {
  const buttonRender = () => {
    if (isRemoval === true) {
      return (
        <button className="Track-action" onClick={handleRemoveTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={handleAddTrack}>
          +
        </button>
      );
    }
  };

  const handleRemoveTrack = () => {
    onRemove(track.id);
  };

  const handleAddTrack = () => {
    onAdd(track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3> {track.name} </h3>
        <p>
          {track.artist} {track.album}{" "}
        </p>
      </div>
      {buttonRender()}
    </div>
  );
}

export default Track;
