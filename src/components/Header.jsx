import React from 'react';
import { Link } from 'react-router-dom';
import hops from '../assets/hops.jpg'

function Header() {
  return (

    <div>
      <style jsx>{`
            .header {
              background-image: url(${hops});
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

export default Header;
