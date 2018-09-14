import React from 'react';
import { Link } from 'react-router-dom';
import hops from '../assets/hops.jpg';

function Header() {
  return (

    <div>
      <style jsx>{`
            .header {
               background-image: url(${hops});
            }
            .jumbotron {
              text-align: center;
              background-image: url(${hops});
              text-shadow: 1px 1px white;
              font-family: Georgia, serif
            }
            img {
              object-fit: cover;
            }
       `}</style>
     <div className='header'>
        <div>
          <div className='jumbotron'>
            <p>Est. 1985</p>
          <h1>Bonafide Brewing</h1>
          <h4>This Month's featured brewery: <em>Mac & Jack's</em></h4>
          </div>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/newkeg">Beer Request</Link></button>
          <button><Link to="/rotators">Requested Beer List</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
