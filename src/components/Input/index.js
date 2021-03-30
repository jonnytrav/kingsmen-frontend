import "./index.css";

const Input = props => {
  return (
    <div className="banner">
      <div className="title-container">
        <h1 className="title">Search Song</h1>
      </div>
      <div className="search-container">
        <form
          className="search-form"
          onSubmit={e => {
            e.preventDefault();
            props.handleSubmit();
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
              e.preventDefault();
              props.handleChange(e.target.value);
            }}
            onBlur={e => {
              e.preventDefault();
              props.handleChange(e.target.value);
            }}
          ></input>
          <div>
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
