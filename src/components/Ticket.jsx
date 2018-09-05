import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
          .color-toggle {
          background-color: lightgreen;
          color: blue;
        }
        .color-toggle:hover {
          background-color: pink;
          color: red;
        }
        `}</style>
      <div className="color-toggle"><h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
