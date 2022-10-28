import React, { Fragment, useState } from 'react';
import Card from '../UI/Card.js';
import './AddMovie.css';

const AddMovie = (props) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [id, setId] = useState('');

  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const onDescChangeHandler = (e) => {
    setDesc(e.target.value);
    console.log(e.target.value);
  };

  const onIdChangeHandler = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
  };

  const onDataSubmitHandler = () => {
    const movie = {
      id: id,
      title: title,
      desc: desc,
    };
    props.getValues(movie);
    console.log('{id}{title}{desc}' + id + title + desc);
  };

  console.log('ADdMOvie in ');
  return (
    <Card>
      <Fragment>
        <div className="title">
          <label>Movie Title </label>
          <input type="text" onChange={onTitleChangeHandler} />
        </div>
        <div className="desc">
          <label>Description </label>
          <input type="text" onChange={onDescChangeHandler} />
        </div>
        <div className="id">
          <label>Id </label>
          <input type="text" onChange={onIdChangeHandler} />
        </div>
        <div>
          <button onClick={onDataSubmitHandler}>Add Movie</button>
        </div>
      </Fragment>
    </Card>
  );
};

export default AddMovie;
