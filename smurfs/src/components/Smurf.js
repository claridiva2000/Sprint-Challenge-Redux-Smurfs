import React from 'react';
import './App.css'


const Smurf = (props) => {
  return (
    <div className='smurfbox'>
      <h2>{props.smurf.name}</h2>
    <p>Age: {props.smurf.age} years old </p>
    <p>height: {props.smurf.height}</p>
    </div>
  )
}

export default Smurf;