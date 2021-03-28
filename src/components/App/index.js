import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Input from "../Input";
import Results from "../Results";

import "./App.css";

const App = () => {
  const [terms, setSearchTerms] = useState("");
  const [results, setSearchResults] = useState([]);

  const onSubmitHandler = () => {
    const cleanTerms = terms.replace(" ", "+");
    const url = new URL("https://itunes.apple.com/search");
    const routeParams = { term: cleanTerms, media: "musicVideo", limit: 42 };
    url.search = new URLSearchParams(routeParams);
    fetch(url, { method: "GET" })
      .then(results => results.json())
      .then(data => {
        const updatedResults = data.results;
        setSearchResults(updatedResults);
      })
      .catch(err => console.log(err));
  };
  //   ************************************************
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <Input handleChange={setSearchTerms} handleSubmit={onSubmitHandler} />
          <Results dataList={results} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
