import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import ReactModal from "react-modal";
import "./index.css";

const PreviewPlayer = props => {
  // create a prop that returns the opposite of current playing boolean inside results map
  const [playingBoolean, setPlayPause] = useState(false);

  return (
    <div className="preview-container">
      <img
        src={props.coverImg}
        // className="cover-art"
        alt="coverArt"
        onClick={e => {
          e.preventDefault();
          setPlayPause(!playingBoolean);
        }}
      ></img>
      <ReactModal
        isOpen={playingBoolean}
        className="preview"
        onRequestClose={e => {
          e.preventDefault();
          setPlayPause(!playingBoolean);
        }}
      >
        <p>bunch of test p's</p>
        <ReactPlayer
          url={props.url}
          playing={playingBoolean}
          loop={true}
          //   className="player"
        ></ReactPlayer>
      </ReactModal>
    </div>
  );
};

export default PreviewPlayer;
