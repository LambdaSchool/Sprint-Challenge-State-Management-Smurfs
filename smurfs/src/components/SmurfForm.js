import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf, postSmurf } from "../actions/actions";

const SmurfForm = () => {
  const [smurfName, setSmurfName] = useState();
  const [smurfAge, setSmurfAge] = useState();
  const [smurfHeight, setSmurfHeight] = useState();

  const handelSubmit = e => {
    e.preventDefault();
    console.log("Smurf Info:", smurfName, smurfAge, smurfHeight);
    addSmurf(smurfName, smurfAge, smurfHeight);
    postSmurf(smurfName, smurfAge, smurfHeight);
    console.log("trying to post my smurf:", postSmurf);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Name Your Smurf"
          onChange={event => setSmurfName(event.target.value)}
          value={smurfName}
        />

        <input
          type="text"
          placeholder="Smurf Age"
          onChange={event => setSmurfAge(event.target.value)}
          value={smurfAge}
        />

        <input
          type="text"
          placeholder="Smurf Height"
          onChange={event => setSmurfHeight(event.target.value)}
          value={smurfHeight}
        />

        <button type="submit">Add Your Smurf!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state from SmurfForm: ", state);
  return {
    addSmurf: state.smurfs
  };
};

export default connect(mapStateToProps, {})(SmurfForm);
