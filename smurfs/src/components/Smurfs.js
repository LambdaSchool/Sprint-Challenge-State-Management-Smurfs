import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const Smurfs = () => {

    const { smurfs } = useContext(SmurfContext);

    return (
        <div>
          {smurfs.map(smurf => {
            return (
              <span key={smurf.id}>
                <p>Name: {smurf.name} Age: {smurf.age} Height: {smurf.height}</p>
              </span>
            );
          })}
        </div>
      );
}

export default Smurfs;



