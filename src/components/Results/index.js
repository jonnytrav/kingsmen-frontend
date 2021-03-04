import { useEffect, useState } from "react";

const Results = props => {
  const [results, setResults] = useState(props.dataList);

  useEffect(() => {
    setResults(props.dataList);
  }, [props]);

  return (
    <div>
      <h1>Working!</h1>
      {console.log("RESULTS", results)}
      {results.map((r, key) => console.log(r.kind))}
    </div>
  );
};

export default Results;
