import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: []
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestProperty = (property, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        if(id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  }

  setName = (name, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        if(id === guest.id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  }

  handleNameInput = e =>
    this.setState({
      pendingGuest: e.target.value
    });

  handleNewGuest = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }

  removeGuest = id => 
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  toggleConfirmation = id => 
    this.toggleGuestProperty('isConfirmed', id);

  toggleEditing = id => 
    this.toggleGuestProperty('isEditing', id);

  toggleFilter = () => 
    this.setState({
      isFiltered: !this.state.isFiltered
    });

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () => 
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <Header 
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
          handleNewGuest={this.handleNewGuest} />
        <MainContent 
          guests={this.state.guests}
          toggleFilter={this.toggleFilter}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          pendingGuest={this.state.pendingGuest} />
      </div>
    );
  }
};

export default App;
