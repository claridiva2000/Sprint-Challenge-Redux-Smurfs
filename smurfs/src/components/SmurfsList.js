import React from 'react';
import Smurf from '../components/Smurf';
// import { addSmurf } from '../actions';


const SmurfsList= props => {
  return (
    <div>
       {props.smurfs.map((smurf, id) => (
            <Smurf key={id} smurf={smurf} />
          ))}
    </div>
  )
}


export default SmurfsList;
