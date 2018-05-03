import React, { Component } from 'react';
import GuestList from './GuestList.js';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Denise',
        isConfirmed: false,
        isEditing: false,
      },
      {
        name: 'Stewart',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Lucy',
        isConfirmed: true,
        isEditing: false,
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  }

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange) {
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
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }

  toggleConfirmationAt = index => 
    this.toggleGuestPropertyAt('isConfirmed', index);

  toggleEditingAt = index => 
    this.toggleGuestPropertyAt('isEditing', index);

  toggleFilter = () => 
    this.setState({
      isFiltered: !this.state.isFiltered
    });

  getTotalInvited = () => this.state.guests.length;

  // getAttendingGuests = () => {}
  // getUnconfirmedGuests = () => {}

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>Who will be there?</p>
          <form onSubmit={this.handleNewGuest}>
              <input 
                type="text" 
                placeholder="Invite Someone"
                onChange={this.handleNameInput}
                value={this.state.pendingGuest} />
              <button 
                type="submit" 
                name="submit" 
                value="submit">
                Submit
              </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered} /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList 
            guests={this.state.guests} 
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered} />
        </div>
      </div>
    );
  }
};

export default App;
