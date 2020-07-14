import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Featured from "./components/Featured";
import Archives from "./components/Archives";
import Settings from "./components/Settings";

const app = document.getElementById("app");

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Featured}></Route>
      <Route path="/archives" component={Archives}></Route>
      <Route path="/settings" component={Settings}></Route>
    </Layout>
  </Router>,
  app
);
