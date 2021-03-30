// import { useEffect } from "react";

const Input = props => {
  return (
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
        {/* <div>
          <button></button>
        </div> */}
      </form>
    </div>
  );
};

export default Input;
