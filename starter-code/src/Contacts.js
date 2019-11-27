import React from "react";
import contacts from "./contacts.json";

const arrActors5 = [];
for (let i = 0; i <= 4; i++) {
  arrActors5.push(contacts[i]);
}

const ContactRow = props => {
  return (
    <tr>
      <td>
        <img
          src={props.pictureUrl}
          style={{ height: "30%", width: "30" }}
        ></img>
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td>
        <button onClick={() => props.delete(props.name)}>Delete</button>
      </td>
    </tr>
  );
};

let arrOfIndexes = [];
for (let i = 5; i < contacts.length; i++) {
  arrOfIndexes.push(i);
}

class Contactslist extends React.Component {
  state = {
    contacts: arrActors5

  };

  addRandomActor = () => {
    const randomIndex = Math.floor(Math.random() * arrOfIndexes.length);
    const randomValueIndex = arrOfIndexes[randomIndex];
    const newActor = contacts[randomValueIndex];

    arrOfIndexes.splice(randomIndex, 1);

    this.setState({
      contacts: [newActor, ...this.state.contacts]
    });
  };

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else {
          return 1;
        }
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

  delete = (name) => {
    // for (let i = 0; i < this.state.contacts.length; i++) {
    //   if (this.state.contacts[i].name !===name) {

    //    // e.target.remove()
    //     this.setState({
    //       contacts:this.state.contacts.splice(i, 1)
    //     });
       
    //   }
    // }

    const filtered = this.state.contacts.filter(contact => {
      return contact.name !== name
    })

    this.setState({
      contacts: filtered
    })
  };

  render() {
    const contacts = this.state.contacts.map(actor => {
      return (
        <ContactRow
          key={actor.id}

          pictureUrl={actor.pictureUrl}
          name={actor.name}
          popularity={actor.popularity}
          delete={this.delete}

        />
      );
    });
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomActor}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {contacts}
        </table>
      </div>
    );
  }
}

const Contacts = () => {
  return (
    <div>
      <Contactslist />
    </div>
  );
};

export default Contacts;
