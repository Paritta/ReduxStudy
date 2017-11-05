import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner";
import HeaderContainer from "./containers/HeaderContainer";
import ModalRootContainer from "./containers/modalcontainers/ModalRootContainer";
import FilterContainer from "./containers/FilterContainer";
import Layout from "./components/box/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <Banner />
          <ModalRootContainer />
          <FilterContainer />
          <Layout />
          <Layout />
          <Layout />
      </div>
    );
  }
}

export default App;
