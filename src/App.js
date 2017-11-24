import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner/Banner";
import HeaderContainer from "./containers/HeaderContainer";
import ModalRootContainer from "./containers/modalcontainers/ModalRootContainer";
import FilterContainer from "./containers/FilterContainer";
import LayoutContainer from "./containers/LayoutContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <Banner />
          <ModalRootContainer />
          <FilterContainer />
          <LayoutContainer />
      </div>
    );
  }
}

export default App;
