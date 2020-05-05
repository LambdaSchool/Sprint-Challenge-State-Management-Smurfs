import React, { useContext, useState } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

export default function Form() {

    const { smurfs, setSmurfs } = useContext(SmurfContext);

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
      });

      const handleChange = (e) => {
        setNewSmurf({
          ...newSmurf,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {

            
        axios
          .get("http://localhost:3333/smurfs")
          .then((res) => {
            setSmurfs(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      
        axios
          .post("http://localhost:3333/smurfs", { ...newSmurf })
          .then((res) => console.log("post: ", res))
          .catch((err) => {
            console.log("post: ", err);
          });
      };

    

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='What`s your smurfin` name?' onChange={handleChange} value={smurfs.name}></input>
            <input type='text' name='age' placeholder='What`s your smurfin` age?' onChange={handleChange} value={smurfs.age}></input>
            <input type='text' name='height' placeholder='How smurfin` tall are ya?' onChange={handleChange} value={smurfs.height}></input>
            <button>Submit</button>
        </form>
    )
};