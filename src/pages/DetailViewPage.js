import React from 'react';
import PropTypes from 'prop-types';

const DetailViewPage = ({ selectedCountry }) => (
  <div>
    <h2>{selectedCountry}</h2>
  </div>
);

DetailViewPage.propTypes = {
  selectedCountry: PropTypes.string.isRequired
};

export default DetailViewPage;

