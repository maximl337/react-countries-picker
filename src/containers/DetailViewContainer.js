import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DetailViewPage from '../pages/DetailViewPage';

const DetailViewContainer = ({ selectedCountry }) => (
  <div>
    <DetailViewPage
      selectedCountry={selectedCountry}
    />
  </div>
);

DetailViewContainer.propTypes = {
  selectedCountry: PropTypes.string.isRequired,
};

const mapStateToProps = ({ countriesReducer }) => ({
  selectedCountry: countriesReducer.selectedCountry
})

export default connect(mapStateToProps)(DetailViewContainer);