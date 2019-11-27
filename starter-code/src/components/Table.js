import React, { Component } from "react";
import Contact from "./Contact";
import dataset from "../contacts.json"; // array of contacts, which I call dataset not to be confused

class Table extends Component {
  // table component that I want to display on the page
  state = {
    contacts: dataset.slice(0, 5) // instead of creating a new data set, I use the one that already exists and since I have connected it to my file. I can splice the indexes that I need
  };

  addRandomContact = () => {
    const newContact = dataset[Math.floor(Math.random() * dataset.length)];

    this.setState({
      contacts: [newContact, ...this.state.contacts]
    });
  };

  sortByName = () => {
    const sortedName = this.state.contacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      else return 1;
    });
    // console.log(sorted)
    // return sorted

    this.setState({
      contacts: sortedName
    });
  };

  sortByPopularity = () => {
    const sortedPopularity = this.state.contacts.sort((a, b) => {
      if (b.popularity < a.popularity) return -1;
      else return 1;
    });
    // console.log(sorted)
    // return sorted

    this.setState({
      contacts: sortedPopularity
    });
  };

  deleteContact = id => {
    const newArr = this.state.contacts.filter(contacts => {
      return contacts.id !== id; //filter is checking if that condition is true or not
    });
    this.setState({
      contacts: newArr
    });
  };

  // I map through to only displaye certain keys from this object inside teh array
  // Map an array of objects into an array of elements
  
  render() {
    const contacts = this.state.contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          id={contact.id}
          pictureUrl={contact.pictureUrl}
          name={contact.name}
          popularity={contact.popularity}
          deleted={this.deleteContact}
        />
      );
    });

    return (
      <div className="table">
        <div className="buttons">
          <button onClick={this.addRandomContact}>Add a random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{contacts}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
