import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function RotatingKeg(props) {
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
            margin-bottom: 0px;
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
        <h3 className="card-title">{props.beer}</h3>
        <div className="row">
          <div className="col-md-6">
            <img src={props.img} className="img" />
          </div>
          <div className="card-body col-md-6">
            <p><em>{props.comments}</em></p>
            <h4>Brewery: {props.brewer}</h4>
            <h4>Name: {props.name}</h4>
            <h4>Email: {props.email}</h4>
            <h5>Requested: {props.formattedWaitTime} ago</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p>{props.thumbsUp}</p>
            <p>{props.thumbsDown}</p>
          </div>
          <div className="col-md-9">
            <button onClick={()=>props.onClickUp(props.id)}>👍</button><br/>
            <button onClick={()=>props.onClickDown(props.id)}>👎</button>
          </div>
        </div>
      </div>
    </div>
  );
}

RotatingKeg.propTypes = {
  beer: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  img: PropTypes.element,
  formattedWaitTime: PropTypes.string.isRequired,
  onClickUp: PropTypes.func,
  onClickDown: PropTypes.func,
};

export default RotatingKeg;
