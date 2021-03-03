import { useState } from "react";
import Results from "../Results";

import "./App.css";

const App = () => {
  const [terms, setSearchTerms] = useState("");
  const search = () => {
    const cleanedTerms = terms.replace(" ", "+");
    const url = new URL("https://itunes.apple.com/search");
    const routeParams = { term: cleanedTerms, media: "musicVideo" };
    url.search = new URLSearchParams(routeParams);
    fetch(url, { method: "GET" })
      .then(results => results.json())
      .then(data => {
        console.log(data.results);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="app-container">
      <div className="search-container">
        <form
          onSubmit={e => {
            e.preventDefault();
            search();
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
              //   console.log(params);
            }}
          ></input>
        </form>
      </div>
      <Results />
    </div>
  );
};

export default App;
