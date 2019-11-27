import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

const Table = props => {
  return (
    <div className="table">
      <tbody>
        <tr>
          <td>
            <img height="200px" src={props.picture} />
          </td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
        </tr>
      </tbody>
    </div>
  );
};

class Contacts extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  AddRandom = () => {
    let allContacts = contacts;
    let randomIndx = Math.floor(Math.random() * contacts.length - 5) + 5;
    let newContact = allContacts[randomIndx];
    allContacts = allContacts.splice(randomIndx, 1);
    this.setState({
      contacts: [newContact, ...this.state.contacts]
    });
  };

  sortName = () => {
    const sortedName = this.state.contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });
    this.setState({
      contacts: sortedName
    });
  };
  sortPopularity = () => {
    const sortedPop = this.state.contacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 1;
    });
    this.setState({
      contacts: sortedPop
    });
  };

  delete = props => {
    console.log("props: ", props);

    const deletedList = this.state.contacts.splice(props, 1);

    this.setState({
      contacts: this.state.contacts.slice(deletedList)
    });
  };

  render() {
    console.log("state: ", this.state.contacts);
    const contactsRender = this.state.contacts.map((el, index) => {
      return (
        <div>
          <Table
            key={el.id}
            picture={el.pictureUrl}
            name={el.name}
            popularity={el.popularity}
          />
          
            <button onClick={() => this.delete(index)} key={index}>
              Delete
            </button>
          
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.AddRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          {contactsRender}
        </table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
