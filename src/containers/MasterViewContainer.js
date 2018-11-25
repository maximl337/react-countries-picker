import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MasterViewPage from '../pages/MasterViewPage';
import * as countryActions from '../actions/countries';

class MasterViewContainer extends Component {
  componentDidMount() {
    this.props.actions.countriesFetchData();
  }
  render() {
    const { countries, selectedCountry, actions, hasError, isLoading } = this.props;
    return (
      <div>
        {hasError ? <p>Sorry there was an error</p> : ''}
        {isLoading ? <p>Loading</p> : ''}
        <MasterViewPage 
          countries={countries}
          selectedCountry={selectedCountry}
          selectCountry={actions.selectCountry}
        />
      </div>
    );
  }
  
};

MasterViewContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCountry: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ countriesReducer }) => ({
  countries: countriesReducer.countries,
  hasError: countriesReducer.hasError,
  isLoading: countriesReducer.isLoading,
  selectedCountry: countriesReducer.selectedCountry
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, countryActions), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterViewContainer);