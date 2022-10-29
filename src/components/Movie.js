import React from 'react';

const Movie = (props) => {
  console.log('print in movie.js');
  return (
    <ul>
      {/* <h4> {props.id}</h4> */}
      <h4> {props.title}</h4>
      <h4> {props.openingCrawl}</h4>
    </ul>
  );
};

export default Movie;
