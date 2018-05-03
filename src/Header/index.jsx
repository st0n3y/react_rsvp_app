import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props => 
	<header>
      <h1>RSVP</h1>
      <p>Who will be there?</p>
      <GuestInputForm 
      	handleNewGuest={props.handleNewGuest}
      	handleNameInput={props.handleNameInput}
      	pendingGuest={props.pendingGuest} />
    </header>;

Header.propTypes = {
	handleNewGuest: PropTypes.func.isRequired,
	handleNameInput: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string,
}

export default Header;