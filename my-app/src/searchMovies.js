import React from "react";

export default function SearchMovies() {
  return (
    <form className="label">
      <label htmlFor="query" className="form">
        Movie Name
      </label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
