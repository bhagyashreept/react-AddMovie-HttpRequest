import React, { Fragment, useState } from 'react';

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
    <Fragment>
      <div>
        <label>Movie Title </label>
        <input type="text" onChange={onTitleChangeHandler} />
      </div>
      <div>
        <label>Description </label>
        <input type="text" onChange={onDescChangeHandler} />
      </div>
      <div>
        <label>Id </label>
        <input type="text" onChange={onIdChangeHandler} />
      </div>
      <div>
        <button onClick={onDataSubmitHandler}>Add Movie</button>
      </div>
    </Fragment>
  );
};

export default AddMovie;
