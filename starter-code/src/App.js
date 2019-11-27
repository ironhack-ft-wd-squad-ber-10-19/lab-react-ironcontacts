import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

const Contact = props => {
  return (
    <tr>
      <td>
        <img
          src={props.pictureUrl}
          style={{ maxWidth: "50%" }}
          alt={`${props.name}`}
        ></img>{" "}
      </td>
      <td>
        <h2>{props.name}</h2>
      </td>
      <td>
        <h2>{props.popularity.toFixed(2)}</h2>
      </td>
    </tr>
  );
};

class Contacts extends Component {
  state = {
    celebs: contacts.slice(0, 5)
  };

  addRandomCeleb = () => {
    let randomCeleb = null;
    if (this.state.celebs.length === contacts.length) return false;
    do {
      let randomIndex = Math.floor(Math.random() * contacts.length);
      randomCeleb = contacts[randomIndex];
      console.log(this.state.celebs.includes(randomCeleb));
    } while (this.state.celebs.includes(randomCeleb));
    this.setState({
      celebs: [randomCeleb, ...this.state.celebs]
    });
  };

  sortByName = () => {
    const sortedCelebsByName = [...this.state.celebs].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      celebs: sortedCelebsByName
    });
  };

  sortByPopularity = e => {
    const sortedCelebsByPopularity = [...this.state.celebs].sort((a, b) => {
      return Number(b.popularity) - Number(a.popularity);
    });
    this.setState({
      celebs: sortedCelebsByPopularity
    });
  };

  render() {
    console.log(this.state.celebs);
    return (
      <div>
        <button onClick={this.addRandomCeleb}>Add random celeb</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.celebs.map(celeb => {
              return (
                <Contact
                  key={celeb.id}
                  pictureUrl={celeb.pictureUrl}
                  name={celeb.name}
                  popularity={celeb.popularity}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <Contacts />
      </div>
    );
  }
}

export default App;
