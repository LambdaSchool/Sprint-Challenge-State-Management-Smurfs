import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Card from './Card';

import {
  getData,
  postData,
  handleNewName,
  handleNewAge,
  handleNewHeight
} from '../actions';

const App = props => {
  if (!props.smurfs.length) props.getData();

  const handleSubmit = event => {
    event.preventDefault();
    if (
      props.smurfs.filter(smurf => smurf.name === props.addSmurf.name)
        .length === 0
    )
      props.postData(props.addSmurf);
    else alert(`It's already exist please try another one!!`);

    if (!props.postSuccees) {
      alert('New Smurf added');
    } else {
      alert('unable to add');
    }
  };

  return (
    <div>
      <header className='header'>
        <h1 className='logo'>
          <a href='/'>Smurf</a>
        </h1>
        <ul className='main-nav'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>

          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </header>
      <div className='formBody'>
        <h1 className='title'>Adding New Smurf</h1>
        <form>
          <input
            onChange={props.handleNewName}
            type='text'
            placeholder='Name'
            required
          />

          <input
            onChange={props.handleNewAge}
            type='number'
            placeholder='Age'
            required
            minLength='2'
            maxLength='3'
          />

          <input
            onChange={props.handleNewHeight}
            type='number'
            placeholder='Height'
            required
            minLength='1'
            maxLength='2'
          />

          <button onClick={handleSubmit}>Add New</button>
        </form>
      </div>

      {/* Getting Smurfs Data */}
      {/* <h1>Smurfs</h1> */}

      {props.getLoading ? (
        <div className='loader'>{/* Loading spinner */}</div>
      ) : (
        props.smurfs.map(smurf => {
          return <Card key={smurf.id} smurf={smurf} />;
        })
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    // Getting States
    smurfs: state.smurfs,
    getLoading: state.getLoading,
    error: state.error,

    // Posting states
    postLoading: state.postLoading,
    postSuccees: state.postSuccees,
    addSmurf: state.addSmurf
  };
};
export default connect(mapStatetoProps, {
  getData,
  postData,
  handleNewName,
  handleNewAge,
  handleNewHeight
})(App);
