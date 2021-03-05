import { useEffect, useState } from "react";
import PreviewPlayer from "../PreviewPlayer";

const Results = props => {
  const [results, setResults] = useState(props.dataList);

  useEffect(() => {
    setResults(props.dataList);
  }, [props]);

  return (
    <div>
      <h1>Working!</h1>
      {console.log("URL for preview in this block", results)}
      {results.map((r, key) => {
        return (
          <div>
            {console.log(r)}
            <style type="text/css"></style>
            <div></div>
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
