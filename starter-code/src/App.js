import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contacts from "./Contacts.js"


class App extends Component {
  render() {
    return (
      <div>
        <Contacts/>
      </div>
    );
  }
}

export default App;
