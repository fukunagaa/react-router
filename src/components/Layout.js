import React from "react";
import { Link } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        {this.props.children}
        <Link to="/archives"><button class="btn btn-danger">archives</button></Link>
        <Link to="/settings"><button class="btn btn-success">settings</button></Link>
      </div>
    );
  }
}

export default Layout;
