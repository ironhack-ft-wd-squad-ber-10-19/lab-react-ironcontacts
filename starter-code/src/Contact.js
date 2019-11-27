import React, { Component } from "react";
import contacts from "./contacts.json";

class Contact extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  /* ---------------------------- ADD RANDOM NUMBER --------------------------- */

  addRandom = () => {
    let newContact;
    const generateRandom = () => {
      let randomNum = Math.floor(Math.random() * (contacts.length - 5));
      let randomContact = contacts[randomNum];
      newContact = randomContact;
      this.state.contacts.forEach(contact => {
        if (newContact.id === contact.id) {
          console.log("WARNING DUPLICATE!!!!!", newContact.name, contact.name);
          generateRandom();
        } else {
          this.setState({
            contacts: [newContact, ...this.state.contacts]
          });
        }
      });
    };

    generateRandom();
  };

  /* ------------------------------ SORT BY NAME ------------------------------ */

  sortName = () => {
    const sortedNames = this.state.contacts.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: sortedNames
    });
  };

  /* --------------------------- SORT BY POPULARITY --------------------------- */

  sortPop = () => {
    const sortedPopularity = this.state.contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: sortedPopularity
    });
  };

  /* ----------------------------- DELETE BUTTON ----------------------------- */

  deleteContact = e => {
    console.log(e.target.id);
    let index = e.target.id;
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: this.state.contacts
    });
  };

  /* ----------------------------- RENDER THE DOM ----------------------------- */

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <button onClick={this.addRandom}>Add Random contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPop}>Sort by Popularity</button>
        </div>
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
            {this.state.contacts.map((contact, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt=""
                    style={{ height: "200px" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>
                  <button id={index} onClick={this.deleteContact}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
