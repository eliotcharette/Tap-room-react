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
      <style>{`
          .card-title {
            background-color: lightgreen;
            font-size: 50px;
            text-align: center;
          }
          .card-body {

          }
      `}
      </style>
      <div className="card">
        <h3 className="card-title">{props.name}</h3>
        <div className="row">
          <div className="col-md-6">
          
          </div>
          <div className="card-body col-md-6">
            <p><em>{props.description}</em></p>
            <p><strong>{props.brewer}</strong></p>
            <h4>${props.price} - about {props.remaining} pints left.</h4>
          </div>
        </div>
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
