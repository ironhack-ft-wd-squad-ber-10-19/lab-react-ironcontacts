import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro"></p>
        <h1>IronContacts</h1>
        <IronContacts />
      </div>
    );
  }
}
class IronContacts extends Component {
  state = {
    icontact: [...contacts].slice(0, 5)
  };

  addPerson = () => {
    let randomNumber = Math.floor(Math.random() * contacts.length);

    //console.log(contacts[randomNumber])
    this.setState({
      icontact: [contacts[randomNumber], ...this.state.icontact]
    });
  };

  sortName = () => {
    this.setState({
      icontact: this.state.icontact.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 1;
      })
    });
  };

  popularityCeleb = () => {
    this.setState({
      icontact: this.state.icontact.sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

  deleteACeleb = id => {
    //console.log(id);
    this.setState({
      icontact: this.state.icontact.filter(obj => {
        return obj.id !== id;
      })
    });
  };

  render() {
    const rendering = this.state.icontact.map(value => {
      return (
        <tr>
          <td>
            <img src={value.pictureUrl} height="100px" alt="celebrity" />
          </td>
          <td>{value.name}</td>
          <td>{value.popularity.toFixed(2)}</td>
          <td>
            {/* onClick={this.deleteACeleb} */}
            <button onClick={() => this.deleteACeleb(value.id)}>Delete</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <button onClick={this.addPerson}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.popularityCeleb}>Sort by Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {rendering}
        </table>
      </div>
    );
  }
}

export default App;
