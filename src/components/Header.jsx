import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <div>
      <style jsx>{`
            .header {
              background-color: lightgrey;
            }
       `}</style>
      <div className='header'>
        <div>
          <h1>Bonafide Brewing</h1>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/newkeg">Add Keg</Link></button>
        </div>
      </div>
    </div>
  );
}
