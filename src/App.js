import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import SingleImageContainer from "./containers/SingleImageContainer/SingleImageContainer";
import "./App.css";
import FrontPage from "./containers/FrontPage/FrontPage";
import axios from "axios";

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=add2d2d52391495814a84b22b6089261f7133c5ac4b5a22017e11a4c7a6dc60b"
      )
      .then(response => {
        // console.log(response.data);
        this.setState({ images: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  filterHandler = id => {
    return this.state.images.find(image => image.id === id);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route
                path="/singleImage/:id"
                render={props => (
                  <SingleImageContainer
                    image={this.filterHandler(props.match.params.id)}
                    {...props}
                  />
                )}
              />
              <Route
                path="/"
                exact
                render={props => <FrontPage {...this.state} />}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
