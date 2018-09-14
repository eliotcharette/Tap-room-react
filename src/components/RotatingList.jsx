import React from 'react';
import RotatingKeg from './RotatingKeg';
import PropTypes from 'prop-types';

function RotatingList(props){
  return (
    <div>
      {props.kegList.map((keg, index) =>
        <RotatingKeg beer={keg.beer}
          comments={keg.comments}
          brewer={keg.brewer}
          name={keg.name}
          email={keg.email}
          img={keg.img}
          key={index}/>
      )}
    </div>
  );
}
RotatingList.propTypes = {
  kegList: PropTypes.array
};

export default RotatingList;
