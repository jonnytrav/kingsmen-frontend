import { useState } from "react";
import Results from "../Results";

import "./App.css";

const App = () => {
  const [terms, setSearchTerms] = useState("");
  const [results, setSearchResults] = useState([]);
  //   Steps for onSubmit handler...
  // 1) replace all spaces in 'term' param with '+'
  // 2) utilize URL object to add route parameters via url.search property
  // 3) convert results to JSON format in resolve block
  // 4) populate array using concatenation to keep old and new results
  const onSubmitHandler = () => {
    const cleanedTerms = terms.replace(" ", "+");
    const url = new URL("https://itunes.apple.com/search");
    const routeParams = { term: cleanedTerms, media: "musicVideo" };
    url.search = new URLSearchParams(routeParams);
    fetch(url, { method: "GET" })
      .then(results => results.json())
      .then(data => {
        console.log("INSIDE RESOLVE BLOCK", data.results);
        const updatedResults = data.results;
        setSearchResults(updatedResults);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="app-container">
      {/* INPUT SECTION */}
      <div className="search-container">
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          <input
            autoFocus
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            id="search"
            onChange={e => {
              setSearchTerms(e.target.value);
            }}
            onBlur={e => {
              setSearchTerms(e.target.value);
            }}
          ></input>
        </form>
      </div>
      {/* OUTPUT SECTION */}
      <div className="results-container">
        <Results dataList={results}></Results>
      </div>
    </div>
  );
};

export default App;
