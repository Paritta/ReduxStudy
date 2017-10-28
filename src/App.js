import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner";
import HeaderContainer from "./containers/HeaderContainer";
import ModalRootContainer from "./containers/ModalRootContainer";
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <Banner />
          <ModalRootContainer />
          <Filter />
      </div>
    );
  }
}

export default App;
