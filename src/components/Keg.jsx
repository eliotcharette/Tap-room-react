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
          .img {
            height: 100%;
            width: 100%;
          }
          .img:hover {
            background-color: black;
          }
          .card-body {
            margin: auto;
          }
          .row {
          }
      `}
      </style>
      <div className="card">
        <h3 className="card-title">{props.name}</h3>
        <div className="row">
          <div className="col-md-6">
            <img src={props.img} className="img" />
          </div>
          <div className="card-body col-md-6">
            <p><em>{props.description}</em></p>
            <h4>Brewery: {props.brewer}</h4>
            <h4>Price: ${props.price}</h4>
            <h4>Remaining: {props.remaining} pints.</h4>
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
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired,
  img: PropTypes.element,
};

export default Keg;
