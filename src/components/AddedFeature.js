import React from 'react';
import { mapStateToProps } from '../state';
import { connect } from 'react-redux';
import { removeFeature } from '../actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature.id, props.feature.price, props.car.features)}
      >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
