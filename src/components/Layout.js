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
    return (
      <div>
        <Nav />
        <h1>Welcome!</h1>
        {this.props.children}
        <Link
          to="/archives/some-other-articles?date=yesterday&filter=none"
          className={"btn btn-warning"}
        >
          archives (some other articles)
        </Link>
        <Link to="/archives?date=today&filter=hot" className={"btn btn-danger"}>
          archives
        </Link>
        <NavLink
          to="/settings/main"
          className={"btn btn-success"}
          activeClassName="btn-danger"
        >
          settings
        </NavLink>
        <Link to="/settings/extra">
          <button className={"btn btn-success"}>settings</button>
        </Link>
        <button className={"btn btn-info"} onClick={this.navigate}>
          featured
        </button>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
