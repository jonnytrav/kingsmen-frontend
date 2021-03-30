import { useEffect, useState } from "react";
import PreviewPlayer from "../PreviewPlayer";
import "./index.css";

const Results = props => {
  const [results, setResults] = useState(props.dataList);

  useEffect(() => {
    setResults(props.dataList);
  }, [props.dataList]);

  return (
    <div className="results-list-container">
      {results.map((r, key) => {
        console.log(r);
        return (
          <div className="result-card">
            <PreviewPlayer
              id={key}
              trackId={r.trackId}
              url={r.previewUrl}
              itunesLink={r.trackViewUrl}
              coverImg={r.artworkUrl100}
              song={r.trackName}
              artist={r.artistName}
              genre={r.primaryGenreName}
            ></PreviewPlayer>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
