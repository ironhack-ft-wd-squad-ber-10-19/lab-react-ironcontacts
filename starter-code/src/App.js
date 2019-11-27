import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import { IncomingMessage } from "http";

class Contact extends Component {
  render() {
    console.log(this.props);
    return (
      <tr>
        <td>
          <img className="pic" src={this.props.pictureUrl} alt="picture" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>
          <button onClick={() => this.props.handleClickDelete(this.props.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

class Contacts extends Component {
  state = {
    contactsPool: contacts.slice(5, contacts.length - 1),
    contacts: contacts.slice(0, 5)
  };

  handleClick = () => {
    let indexProfile = Math.floor(
      Math.random() * this.state.contactsPool.length
    );

    let newProfile = this.state.contactsPool[indexProfile];

    // this.state.contacts.unshift(newProfile);

    // this.state.contactsPool.splice(indexProfile, 1);

    const newPool = [...this.state.contactsPool];
    newPool.splice(indexProfile, 1);

    this.setState(
      {
        contactsPool: newPool,
        contacts: [newProfile, ...this.state.contacts]
      },
      () => console.log(this.state.contacts)
    );
  };

  handleClickSort = () => {
    let sortedName = this.state.contacts.sort(function(a, b) {
      var textA = a.name;
      var textB = b.name;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    this.setState({
      contacts: sortedName
    });
  };

  handleClickPopularity = () => {
    let sortedPopularity = this.state.contacts.sort(function(a, b) {
      var textA = a.popularity;
      var textB = b.popularity;
      return textA < textB ? 1 : textA > textB ? -1 : 0;
    });
    this.setState({
      contacts: sortedPopularity
    });
  };

  handleClickDelete = id => {
    let contacts = this.state.contacts;
    // get index of object to be deleted
    let index = 0;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id == id) {
        index = i;
      }
    }
    contacts.splice(index, 1);
    this.setState({
      contacts: contacts
    });
  };

  render() {
    let elementsArray = this.state.contacts.map(profile => {
      return (
        <Contact
          handleClickDelete={this.handleClickDelete}
          key={profile.id}
          name={profile.name}
          pictureUrl={profile.pictureUrl}
          popularity={profile.popularity.toFixed(0)}
        />
      );
    });

    return (
      <div className="app">
        <div className="btns">
          <button onClick={this.handleClick} className="btn-table">
            Add random contact
          </button>
          <button onClick={this.handleClickSort}>Sort by name</button>
          <button onClick={this.handleClickPopularity}>
            Sort by popularity
          </button>
        </div>
        <table className="table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <tbody> {elementsArray}</tbody>
        </table>
      </div>
    );
  }
}
const App = () => {
  return (
    <div className="App">
      {/* <LikeButton /> */}
      <h1>IronContacts</h1>
      <Contacts />
    </div>
  );
};
export default App;
