import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = props => 
	<form onSubmit={props.handleNewGuest}>
      <input 
        type="text" 
        placeholder="Invite Someone"
        onChange={props.handleNameInput}
        value={props.pendingGuest} />
      <button 
        type="submit" 
        name="submit" 
        value="submit">
        Submit
      </button>
  </form>;

GuestInputForm.propTypes = {
	handleNewGuest: PropTypes.func.isRequired,
	handleNameInput: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string,
}

export default GuestInputForm;