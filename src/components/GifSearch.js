import React, { useState } from "react";

function GifSearch({ fetchGifs }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGifs(query);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for GIFs"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GifSearch;
