import React from "react";
import { Link, withRouter } from "react-router-dom";

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
        <h1>Welcome!</h1>
        {this.props.children}
        <Link to="/archives">
          <button class="btn btn-danger">archives</button>
        </Link>
        <Link to="/settings">
          <button class="btn btn-success">settings</button>
        </Link>
        <button class="btn btn-info" onClick={this.navigate}>
          featured
        </button>
      </div>
    );
  }
}

export default withRouter(Layout);