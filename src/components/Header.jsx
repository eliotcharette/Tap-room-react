import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return (

    <div>
      <style jsx>{`
          .color-toggle {
          background-color: lightblue;
          color: blue;
        }
        .color-toggle:hover {
          background-color: lightpink;
          color: red;
        }
        `}</style>
      <div className="color-toggle">
        <div>
          <h1>Help Queue</h1>
          <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
