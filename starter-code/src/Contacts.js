import React, { Component } from "react";

import contacts from "./contacts.json";

export default class Contacts extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addContact = () => {
    let randomNumber = Math.floor(Math.random() * contacts.length);
    this.state.newContact = contacts[randomNumber];

    if (this.state.contacts.length < 1) {
      this.setState({
        contacts: [this.state.newContact, ...this.state.contacts]
      });
    } else {
      this.state.contacts.filter(cont => {
        if (cont.id === this.state.newContact.id) {
          this.addContact();
        } else {
          this.setState({
            contacts: [this.state.newContact, ...this.state.contacts]
          });
        }
      });
    }
  };

  sortByName = () => {
    let sorted = [...this.state.contacts];
    sorted.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      contacts: sorted
    });
  };

  sortByPopularity = () => {
    let sorted = [...this.state.contacts];
    sorted.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: sorted
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(cont => cont.id !== id && cont)
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(cont => {
              return (
                <tr key={cont.id}>
                  <td>
                    <img
                      src={cont.pictureUrl}
                      alt={cont.name}
                      style={{ height: "100px" }}
                    />
                  </td>
                  <td>{cont.name}</td>
                  <td>{cont.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(cont.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
