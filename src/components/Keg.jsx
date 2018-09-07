import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style global jsx>{`
          body {
            background-color: #b3ecff
          }
        `}
      </style>
      <div>
        <h3>{props.name}</h3>
        <p><em>{props.description}</em></p>
        <p><strong>{props.brewer}</strong></p>
        <h4>${props.price} - about {props.remaining} pints left.</h4>
      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default Keg;
