import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const Main = props => 
	<div className="main">
      	
  	<ConfirmedFilter 
  		toggleFilter={props.toggleFilter}
  		isFiltered={props.isFiltered} />

  	<Counter 
    	totalInvited={props.totalInvited}
    	numberAttending={props.numberAttending}
    	numberUnconfirmed={props.numberUnconfirmed} />
      
  	<GuestList 
    	guests={props.guests} 
    	toggleConfirmation={props.toggleConfirmation}
    	toggleEditing={props.toggleEditing}
    	setName={props.setName}
    	isFiltered={props.isFiltered}
    	removeGuest={props.removeGuest}
    	pendingGuest={props.pendingGuest} />
  </div>;

Main.propTypes = {
	guests               : PropTypes.array.isRequired,
	toggleFilter         : PropTypes.func.isRequired,
	toggleConfirmation   : PropTypes.func.isRequired,
	toggleEditing        : PropTypes.func.isRequired,
	setName              : PropTypes.func.isRequired,
	removeGuest          : PropTypes.func.isRequired,
	isFiltered           : PropTypes.bool.isRequired,
	totalInvited         : PropTypes.number,
	numberAttending      : PropTypes.number,
	numberUnconfirmed    : PropTypes.number,
	pendingGuest         : PropTypes.string,
}

export default Main;