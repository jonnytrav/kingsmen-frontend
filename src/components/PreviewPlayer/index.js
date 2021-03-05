import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import "./index.css";

const PreviewPlayer = props => {
  // create a prop that returns the opposite of current playing boolean inside results map
  const [playingBoolean, setPlayPause] = useState(false);

  return (
    <div>
      <p>bunch of test p's</p>
      {/* <img src={props.coverImg} className="coverArt" alt="coverArt"></img> */}
      <ReactPlayer
        url={props.url}
        playing={playingBoolean}
        loop="true"
      ></ReactPlayer>
    </div>
  );
};

export default PreviewPlayer;
