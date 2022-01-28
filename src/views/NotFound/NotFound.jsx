import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>sorry</h1>
      <button onClick={()=>navigate("/")} >Go Back</button>
    </div>
  )
}
