import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import SingleImage from "./containers/SingleImage/SingleImage";
import ImagesGrid from "./containers/FrontPage/FrontPage";
import "./App.css";
import FrontPage from "./containers/FrontPage/FrontPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/singleImage" component={SingleImage} />
              <Route path="/" exact component={FrontPage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
