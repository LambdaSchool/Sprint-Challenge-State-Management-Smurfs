import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from './Form';
import Smurfs from './Smurfs';
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';

export default function App() {

  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Who the Smurf Are You?</h1>
      <SmurfContext.Provider value={{ smurfs, setSmurfs }}>
        <Smurfs />
        <Form />
      </SmurfContext.Provider>
    </div>
  );
};




  
