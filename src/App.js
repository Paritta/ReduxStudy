import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner/Banner";
import Slider from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./containers/BodyContainer/HeaderContainer";
import ModalRootContainer from "./containers/ModalContainers/ModalRootContainer";
import FilterContainer from "./containers/BodyContainer/FilterContainer";
import LayoutContainer from "./containers/BodyContainer/LayoutContainer";

import "autotrack";
import "autotrack/lib/plugins/page-visibility-tracker";
import "autotrack/lib/plugins/social-widget-tracker";
import "autotrack/lib/plugins/event-tracker";
import "autotrack/lib/plugins/outbound-form-tracker";
import "autotrack/lib/plugins/outbound-link-tracker";

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderContainer />
          <Banner />
          <ModalRootContainer />
          <Slider />
          <FilterContainer />
          <LayoutContainer />
          <Footer />
      </div>
    );
  }
}

export default App;
