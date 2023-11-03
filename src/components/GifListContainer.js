import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query) => {
    const apiKey = "A92PEMEDjGNuJGFwqVLtSMAPpAA4sC3L";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data.slice(0, 3));
      });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">GIF Search</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <GifSearch fetchGifs={fetchGifs} />
                </div>
                <div className="col-md-6">
                  <GifList gifs={gifs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GifListContainer;
