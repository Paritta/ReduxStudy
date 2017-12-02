import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./containers/BodyContainer/HeaderContainer";
import ModalRootContainer from "./containers/ModalContainers/ModalRootContainer";
import FilterContainer from "./containers/BodyContainer/FilterContainer";
import LayoutContainer from "./containers/BodyContainer/LayoutContainer";
import TopPopuContainer from "./containers/BodyContainer/TopPopuContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <Banner />
          <ModalRootContainer />
          <TopPopuContainer />
          <FilterContainer />
          <LayoutContainer />
          <Footer />
      </div>
    );
  }
}

export default App;
