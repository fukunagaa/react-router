import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import className from "classnames";

import Nav from "./Nav";
import Footer from "./Footer";

class Layout extends React.Component {
  navigate = () => {
    console.log(this.props);
    // 履歴を残す
    // this.props.history.push("/");
    // 履歴を残さない
    this.props.history.replace("/");
  };
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location}/>
        <h1>Welcome! News.Net</h1>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
