import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
