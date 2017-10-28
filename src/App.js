import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import HeaderContainer from "./containers/HeaderContainer";
import ModalRootContainer from "./containers/ModalRootContainer";
import ModalRegister from "./components/ModalRegister";

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <Banner />
          <ModalRootContainer />
      </div>
    );
  }
}

export default App;
