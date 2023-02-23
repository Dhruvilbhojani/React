import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/greet'
import Welcome from './components/welcome'
import Hello from './components/hello'

function App() {
  return (
    <div className="App">
      <Greet name="user1" lname="lname1" />
      <Greet name="user2" lname="lname2">
        <p>paragraph is here </p>
      </Greet>
      <Greet name="user3" lname="lname3">
        <button>Dummy</button>
      </Greet>
      <Welcome name="user1" lname="lname1" />
      <Welcome name="user2" lname="lname2">
        <p>paragraph is here </p>
      </Welcome>
      <Welcome name="user3" lname="lname3">
        <button>Dummy</button>
      </Welcome>
      <Hello />
    </div>
  );
}

export default App;