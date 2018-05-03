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
    	toggleConfirmationAt={props.toggleConfirmationAt}
    	toggleEditingAt={props.toggleEditingAt}
    	setNameAt={props.setNameAt}
    	isFiltered={props.isFiltered}
    	removeGuestAt={props.removeGuestAt}
    	pendingGuest={props.pendingGuest} />
  </div>;

Main.propTypes = {
	guests               : PropTypes.array.isRequired,
	toggleFilter         : PropTypes.func.isRequired,
	toggleConfirmationAt : PropTypes.func.isRequired,
	toggleEditingAt      : PropTypes.func.isRequired,
	setNameAt            : PropTypes.func.isRequired,
	removeGuestAt        : PropTypes.func.isRequired,
	isFiltered           : PropTypes.bool.isRequired,
	totalInvited         : PropTypes.number,
	numberAttending      : PropTypes.number,
	numberUnconfirmed    : PropTypes.number,
	pendingGuest         : PropTypes.string,
}

export default Main;