import React from "react";

function GifList(props) {
  return (
    <ul className="list-unstyled">
      {props.gifs.map((gif) => (
        <li key={gif.id} className="mb-3">
          <img src={gif.images.original.url} alt={gif.title} className="img-thumbnail" />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
