import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/404.jpg';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div className="grim">
      <style jsx>{`
          .grim {
            background-image: url(${error});
            background-position: center;
            background-size: cover;
          }
          .dumb {
            visibility: hidden;
            height: 600px;
          }
            `}</style>
      <img src={error} className="dumb" />
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead? Next time I wont be so generous...</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
