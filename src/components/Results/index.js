import { useEffect, useState } from "react";
import PreviewPlayer from "../PreviewPlayer";
import "./index.css";

const Results = props => {
  const [results, setResults] = useState(props.dataList);

  useEffect(() => {
    setResults(props.dataList);
  }, [props]);

  return (
    <div className="results-list-container">
      {results.map((r, key) => {
        return (
          <div className="single-result">
            <PreviewPlayer
              id={key}
              url={r.previewUrl}
              coverImg={r.artWorkUrl60}
            ></PreviewPlayer>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
