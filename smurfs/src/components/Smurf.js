
import React from 'react'

export default function Smurf(props) {
    console.log('single smurf', props)
    return (
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <p>age: {props.smurf.age}</p>
        </div>
    )
}