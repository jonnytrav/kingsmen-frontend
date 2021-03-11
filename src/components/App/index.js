import { useState } from "react";
import Results from "../Results";

import "./App.css";

const App = () => {
  const [terms, setSearchTerms] = useState("");
  const [results, setSearchResults] = useState([]);
  //   ************************************************
  const onSubmitHandler = () => {
    const cleanedTerms = terms.replace(" ", "+");
    const url = new URL("https://itunes.apple.com/search");
    const routeParams = { term: cleanedTerms, media: "musicVideo", limit: 42 };
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
          className="search-form"
          onSubmit={e => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          <input
            className="search-input"
            autoFocus
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            id="search"
            placeholder="Find a song/artist/album..."
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
