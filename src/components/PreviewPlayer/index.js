import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import ReactModal from "react-modal";
import "./index.css";

const PreviewPlayer = props => {
  // create a prop that returns the opposite of current playing boolean inside results map
  const [playingBoolean, setPlayPause] = useState(false);

  return (
    <div className="preview-container">
      <div className="cover-img-container">
        <img
          className="cover-img"
          src={props.coverImg}
          // className="cover-art"
          alt="coverArt"
          onClick={e => {
            e.preventDefault();
            setPlayPause(!playingBoolean);
          }}
        ></img>
        <div className="cover-title">
          <p>{props.song}</p>
        </div>
      </div>

      <ReactModal
        isOpen={playingBoolean}
        onRequestClose={e => {
          e.preventDefault();
          setPlayPause(!playingBoolean);
        }}
        className="preview"
      >
        <ReactPlayer
          url={props.url}
          playing={playingBoolean}
          loop={true}
          //   className="player"
        ></ReactPlayer>
        <div className="song-details">
          <div>Title: {props.song}</div>
          <div>Artist: {props.artist}</div>
          <div>Genre: {props.genre}</div>
        </div>
        <div className="itunes-link-container">
          <a className="itunes-link" href={props.itunesLink} target="_blank">
            Watch Full Video on iTunes
          </a>
        </div>
      </ReactModal>
    </div>
  );
};

export default PreviewPlayer;
