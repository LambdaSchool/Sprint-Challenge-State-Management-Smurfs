import React, { useState } from "react";
import "./AddSmurf.css";


export default function AddSmurf(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div className="InputBoxes">
      <h1> Add a Smurf!</h1>
      <input
        type="text"
        name="name"
        value={newSmurf.name}
        onChange={handleChanges}
        placeholder="  Smurf name"
      />
      <input
        type="text"
        name="age"
        value={newSmurf.age}
        onChange={handleChanges}
        placeholder="  Smurf age"
      />
      <input
        type="text"
        name="height"
        value={newSmurf.height}
        onChange={handleChanges}
        placeholder="  Smurf height"
      />
      <button className="button" onClick={handleSubmit}>
        Add Smurf
      </button>
    </ div>
  );
}