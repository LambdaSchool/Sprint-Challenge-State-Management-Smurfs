// import React from 'react';

// import './App.css';

// const Card = props => {
//   return (
//     <div className='cardBody'>
//       <h3 className='titleCard'>{props.smurf.name}</h3>
//       <p>Age: {props.smurf.age} years old</p>
//       <p>Height: {props.smurf.height}</p>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

function Card({ smurf, deleteSmurf }) {
  const handleSubmit = event => {
    // event.preventDefault();
    deleteSmurf(smurf.id);
  };
  return (
    <div className='cardBody'>
      <h1 className='titleCard'>
        Name: <span>{smurf.name}</span>
      </h1>

      <p>
        Age: <span>{smurf.age}</span>
      </p>

      <p>
        Height: <span>{smurf.height}</span>
      </p>
      <p className='button' onClick={handleSubmit}>
        <a href='/'>X</a>
      </p>
    </div>
  );
}

export default connect(null, { deleteSmurf })(Card);
